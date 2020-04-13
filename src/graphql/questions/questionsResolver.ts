import { Questions } from '../../database/entity/Questions';

export const questionsResolver = {
  Query: {
    getQuestions: async (_: any, args: any) => {
      const { id } = args;
      const questions = await Questions.find({ where: { owner: id } });
      return questions;
    },
  },
  Mutation: {
    addQuestion: async (_: any, args: any) => {
      const { owner, category, importance, questionContent, answer } = args;
      try {
        const question = Questions.create({
          owner,
          category,
          importance,
          questionContent,
          answer,
        });
        await question.save();
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
