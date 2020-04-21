import { getQuestionsRepository } from '../../database';

export const questionsResolver = {
  // 수호님것처럼 이 아래가 있어야 하나?
  // ImportanceEnum: {
  //   ONE: 'ONE',
  //   TWO: 'TWO',
  //   THREE: 'THREE',
  //   FOUR: 'FOUR',
  //   FIVE: 'FIVE',
  // },

  Query: {
    getQuestions: async (_: any, args: any) => {
      const { id } = args;
      const questions = await getQuestionsRepository().find({
        where: { owner: id },
      });
      return questions;
    },
  },
  Mutation: {
    addQuestion: async (_: any, args: any) => {
      const { owner, category, importance, questionContent, answer } = args;
      try {
        const question = getQuestionsRepository().create({
          owner,
          category,
          importance,
          questionContent,
          answer,
        });
        await getQuestionsRepository().save(question);
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
