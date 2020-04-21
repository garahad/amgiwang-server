import { getConnectionOptions, createConnection, Connection } from 'typeorm';
import { UserRepository } from './respositories/UserRepository';
import { QuestionsRepository } from './respositories/QuestionsRepository';
import { CategoriesRepository } from './respositories/CategoriesRepository';

let connection: Connection;

const connectDB = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  connection = await createConnection({
    ...connectionOptions,
    name: process.env.NODE_ENV,
  });
  return connection;
};

export const getUserRepository = (): UserRepository =>
  connection.getCustomRepository(UserRepository);

export const getQuestionsRepository = (): QuestionsRepository =>
  connection.getCustomRepository(QuestionsRepository);

export const getCategoriesRepository = (): CategoriesRepository =>
  connection.getCustomRepository(CategoriesRepository);

export default connectDB;
