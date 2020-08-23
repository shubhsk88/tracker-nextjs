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

    addEvent: async (_, { habitId, date }) => {
      try {
        date.setHours(0, 0, 0, 0);
        const habit = await Habit.findOneAndUpdate(
          {
            _id: habitId,
            'events.date': {
              $ne: date,
            },
          },
          {
            $addToSet: {
              events: {
                date,
              },
            },
          }
        );
        return habit;
      } catch (e) {
        console.log(e);
      }
    },

    removeEvent: async (_, { habitId, eventId }) => {
      console.log('same');
    },
  },
};
