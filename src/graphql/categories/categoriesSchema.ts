import { gql } from 'apollo-server-express';

export const categoriesSchema = gql`
  extend type Query {
    getCategories(id: Int!): [Category]
  }
  extend type Mutation {
    addCategory(userId: Int!, domain: String!, subdomain: String!): Boolean!
  }
  type Category {
    id: Int!
    userId: Int!
    domain: String!
    subdomain: String!
  }
`;
