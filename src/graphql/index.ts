import { gql } from 'apollo-server-express';
import { categoriesResolver } from './categories/categoriesResolver';
import { questionsResolver } from './questions/questionsResolver';
import { userResolver } from './user/userResolver';
import { categoriesSchema } from './categories/categoriesSchema';
import { userSchema } from './user/userSchema';
import { questionsSchema } from './questions/questionsSchema';
import { enumSchema } from './shared/enumSchema';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

const resolvers = [userResolver, questionsResolver, categoriesResolver];

const schemas = [
  linkSchema,
  enumSchema,
  categoriesSchema,
  userSchema,
  questionsSchema,
];

export { resolvers, schemas };
