import { Categories } from '../../database/entity/Categories';

export const categoriesResolver = {
  Query: {
    getCategories: async (_: any, args: any) => {
      const { id } = args;
      const categories = await Categories.find({
        where: { userId: id },
      });
      return categories;
    },
  },
  Mutation: {
    addCategory: async (_: any, args: any) => {
      const { userId, domain, subdomain } = args;
      try {
        const category = Categories.create({
          userId,
          domain,
          subdomain,
        });
        await category.save();
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
