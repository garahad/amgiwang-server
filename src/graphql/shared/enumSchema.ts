import { gql } from 'apollo-server-express';

export const enumSchema = gql`
  enum ImportanceEnum {
    ONE
    TWO
    THREE
    FOUR
    FIVE
  }
`;
