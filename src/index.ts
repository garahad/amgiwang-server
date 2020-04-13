import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, schemas } from './graphql';

// 나중에 HF server 보고 cors 설정 등 추가할 수

const startServer = async () => {
  const server = new ApolloServer({ typeDefs: schemas, resolvers });

  await createConnection();

  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  );
};

startServer();
