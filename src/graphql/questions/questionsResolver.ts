import { Questions } from '../../database/entity/Questions';
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
    editQuestion: async (_: any, args: any) => {
      const { id, owner, category, importance, questionContent, answer } = args;

      try {
        const question = await getQuestionsRepository()
          .createQueryBuilder('question')
          .update(Questions)
          .set({ owner, category, importance, questionContent, answer })
          .where('id = :id', { id })
          .execute();
        console.log('question', question);
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
    deleteQuestion: async (_: any, args: any) => {
      const { id } = args;
      try {
        await getQuestionsRepository()
          .createQueryBuilder()
          .delete()
          .from(Questions)
          .where('id = :id', { id })
          .execute();
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
