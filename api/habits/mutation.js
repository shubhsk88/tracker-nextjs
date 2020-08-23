import Habit from './habits';

export const habitsMutation = {
  Mutation: {
    addHabit: async (_, { habit }) => {
      try {
        const newHabit = await Habit.create({ ...habit });
        return newHabit;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
};
