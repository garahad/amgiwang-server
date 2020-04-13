import { gql } from 'apollo-server-express';

export const questionsSchema = gql`
  extend type Query {
    getQuestions(id: Int!): [Question]
  }
  extend type Mutation {
    addQuestion(
      owner: Int!
      category: Int!
      importance: ImportanceEnum!
      questionContent: String!
      answer: String!
    ): Boolean!
  }
  type Question {
    id: Int!
    owner: Int!
    category: Int!
    importance: ImportanceEnum!
    questionContent: String!
    answer: String!
  }
`;

// playground로 하니 enum 값은 "TWO"가 아니라 TWO라고 해야만 제대로 작동하는데 client에서 날릴땐 어떨까? 그때도 string이 안될까?
