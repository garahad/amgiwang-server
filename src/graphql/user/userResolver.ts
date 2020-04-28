import { getUserRepository } from '../../database';

export const userResolver = {
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;
      const user = await getUserRepository().findOne({ where: { id } });
      return user;
    },
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      console.log('args');
      const { snsId, provider, email, nick, password } = args;
      try {
        const user = getUserRepository().create({
          snsId,
          provider,
          email,
          nick,
          password,
        });
        await getUserRepository().save(user);
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
