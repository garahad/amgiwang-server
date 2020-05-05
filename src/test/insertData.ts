import testCategories from './testCategories';
import testQuestions from './testQuestions';
import testUsers from './testUsers';
import connectDB, {
  getUserRepository,
  getQuestionsRepository,
  getCategoriesRepository,
} from '../database';

const addUser = async (args: any) => {
  const { id, snsId, provider, email, nick, password } = args;
  try {
    const user = getUserRepository().create({
      id,
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
  const { id, user, domain, subdomain } = args;
  try {
    const category = getCategoriesRepository().create({
      id,
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
  const { id, owner, category, importance, questionContent, answer } = args;
  try {
    const question = getQuestionsRepository().create({
      id,
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
  // connectDB 정도만 await 효과 있을지 모르겠고, 뒤에 insertData는 promise return 함수가 아니라 await 붙일 필요가 없는 듯. 작동 안함.
};

run();
