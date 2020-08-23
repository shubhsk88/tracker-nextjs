import Habit from './habits';

export const habitQuery = {
  Query: {
    habits: async () => {
      try {
        const result = await Habit.find();
        return result;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
  },
};
