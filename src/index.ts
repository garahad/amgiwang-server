import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import { resolvers, schemas } from './graphql';
import connectDB from './database';

// 나중에 HF server 보고 cors 설정 등 추가할 수
// import http 는 왜 해야 하지?
// pubsub은 뭐지?
// authorization 및 playground setting

const startServer = async () => {
  const server = new ApolloServer({ typeDefs: schemas, resolvers });

  await connectDB();

  const app = express();

  const corsOption = {
    credentials: true,
    origin: true,
  };
  app.use(cors(corsOption));
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
};

startServer();
