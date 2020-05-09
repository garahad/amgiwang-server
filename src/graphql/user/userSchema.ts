import { gql } from 'apollo-server-express';

// createdColumn, updatedColumn을 사용하면 schema, resolver에 굳이 추가안해줘도 알아서 들어가는 듯. 근데 수호님것보면 scalar DateTime이라고 해줬는데 DateTime을 이제 자동으로 지원하는건가?

export const userSchema = gql`
  extend type Query {
    getUser(id: Int!): User
  }
  extend type Mutation {
    addUser(
      nick: String!
      email: String!
      provider: String!
      snsId: String!
      password: String!
    ): Boolean!
  }
  type User {
    id: Int!
    nick: String!
    email: String!
    password: String!
    provider: String
    snsId: String
  }
`;
