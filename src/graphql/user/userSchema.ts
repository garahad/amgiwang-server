import { gql } from 'apollo-server-express';

// extend 를 붙이고 안 붙이고 차이?
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
