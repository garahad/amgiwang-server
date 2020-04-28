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
        // find 때는 relations다 체크해도, create할 때는 relation 상관 없이 User 형태로 안 쓰고 그냥 엮여있는 id인 int 만 써도 되는 듯. 더해서 현재까지는 one to many에서 many가 주인으로 user를 정하면서 추가할 순 있는데 user를 만들면서 questions 배열 같은 걸 추가하는건 되는지 확인 못해봄.
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
