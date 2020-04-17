import { createConnection } from 'typeorm';
import { User } from '../database/entity/User';
import { Questions } from '../database/entity/Questions';
import { Categories } from '../database/entity/Categories';
import testCategories from './testCategories';
import testQuestions from './testQuestions';
import testUsers from './testUsers';

const addCategory = async (args: any) => {
  const { userId, domain, subdomain } = args;
  try {
    const category = Categories.create({
      userId,
      domain,
      subdomain,
    });
    await category.save();
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
};
const addQuestion = async (args: any) => {
  const { owner, category, importance, questionContent, answer } = args;
  try {
    const question = Questions.create({
      owner,
      category,
      importance,
      questionContent,
      answer,
    });
    await question.save();
    return true;
  } catch (error) {
    console.log('error', error);
    return false;
  }
};

const addUser = async (args: any) => {
  const { snsId, provider, email, nick, password } = args;
  try {
    const user = User.create({
      snsId,
      provider,
      email,
      nick,
      password,
    });
    await user.save();
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
  // const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  await createConnection('default');
  // let connection: Connection;
  // const connectDB = async () => {
  //   const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  //   connection = await createConnection({
  //     ...connectionOptions,
  //     name: 'test',
  //   });
  //   return connection;
  // };
  // await connectDB();

  await insertData(testUsers, addUser);
  await insertData(testCategories, addCategory);
  await insertData(testQuestions, addQuestion);
};

run();
