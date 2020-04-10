import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getUser(id: Int!): User
    # getQuestions(id: Int!): Questions[]
    # getCategories(id: Int!): Categories[]
  }
  type Mutation {
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
  # type Questions {
  #   id: Int!
  #   owner: String!
  #   category: Int!
  #   importance: String!
  #   question: String!
  #   answer: String!
  # }
  # type Categories {
  #   id: Int!
  #   userId: Int!
  #   domain: String!
  #   subdomain: String!
  # }
`;
