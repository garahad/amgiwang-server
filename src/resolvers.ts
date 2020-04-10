// import { User } from './entity/User';

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: async () => {
      // const { id } = args;
      return true;
      // return await User.findOne({ where: { id } });
    },
  },
  Mutation: {
    addUser: async () => {
      // const { firstName, lastName, age } = args;
      try {
        // const user = User.create({
        //   firstName,
        //   lastName,
        //   age
        // });

        // await user.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
