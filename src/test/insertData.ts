import testCategories from './testCategories';
import testQuestions from './testQuestions';
import testUsers from './testUsers';
import connectDB, {
  getUserRepository,
  getQuestionsRepository,
  getCategoriesRepository,
} from '../database';

const addUser = async (args: any) => {
  const { snsId, provider, email, nick, password } = args;
  try {
    const user = getUserRepository().create({
      snsId,
      provider,
      email,
      nick,
      password,
    });
    await getUserRepository().save(user);
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
};

const addCategory = async (args: any) => {
  const { user, domain, subdomain } = args;
  // const userId = await getUserRepository().findOne({
  //   id: user,
  // });
  try {
    const category = getCategoriesRepository().create({
      user,
      domain,
      subdomain,
    });
    await getCategoriesRepository().save(category);
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
};

const addQuestion = async (args: any) => {
  const { owner, category, importance, questionContent, answer } = args;
  // const user = await getUserRepository().findOne({
  //   id: owner,
  // });
  // const cate = await getCategoriesRepository().findOne({
  //   id: category,
  // });
  // console.log('cate', cate);
  try {
    const question = getQuestionsRepository().create({
      owner,
      category,
      importance,
      questionContent,
      answer,
    });
    await getQuestionsRepository().save(question);
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
};

const insertData = (data: any[], insertFunc: Function) => {
  data.forEach((oneData: any) => insertFunc(oneData));
};

const run = async () => {
  await connectDB();

  await insertData(testUsers, addUser);
  await insertData(testCategories, addCategory);
  await insertData(testQuestions, addQuestion);
};

run();
