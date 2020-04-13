import { User } from '../../database/entity/User';

export const userResolver = {
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;
      const user = await User.findOne({ where: { id } });
      return user;
    },
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const { snsId, provider, email, nick, password } = args;
      try {
        const user = User.create({
          snsId,
          provider,
          email,
          nick,
          password,
        });
        await user.save();
        return true;
      } catch (error) {
        console.log('error', error);
        return false;
      }
    },
  },
};
