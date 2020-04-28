import { getQuestionsRepository } from '../../database';

export const questionsResolver = {
  Query: {
    getQuestions: async (_: any, args: any) => {
      const { id } = args;
      const questions = await getQuestionsRepository().find({
        where: { owner: id },
        relations: ['category', 'owner'],
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
