import { gql } from 'apollo-server-express';

export const questionsSchema = gql`
  extend type Query {
    getQuestions(id: Int!): [Question]
  }
  extend type Mutation {
    addQuestion(
      owner: Int!
      category: Int!
      importance: String!
      questionContent: String!
      answer: String!
    ): Boolean!
  }
  type Question {
    id: Int!
    owner: Int!
    category: Int!
    importance: String!
    questionContent: String!
    answer: String!
  }
`;
