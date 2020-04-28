import { getCategoriesRepository } from '../../database';

export const categoriesResolver = {
  Query: {
    getCategories: async (_: any, args: any) => {
      const { id } = args;
      const categories = await getCategoriesRepository().find({
        where: { user: id },
        relations: ['user'],
      });
      return categories;
    },
  },
  Mutation: {
    addCategory: async (_: any, args: any) => {
      const { user, domain, subdomain } = args;
      try {
        const category = getCategoriesRepository().create({
          user,
          domain,
          subdomain,
        });
        await getCategoriesRepository().save(category);
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
