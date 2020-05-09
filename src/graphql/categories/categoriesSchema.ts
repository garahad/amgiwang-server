import { gql } from 'apollo-server-express';

export const categoriesSchema = gql`
  extend type Query {
    getCategories(id: Int!): [Category]
  }
  extend type Mutation {
    addCategory(user: Int!, domain: String!, subdomain: String): Boolean!
  }
  type Category {
    id: Int!
    user: User!
    domain: String!
    subdomain: String!
  }
`;
