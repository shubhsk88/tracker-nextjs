import Habit from './habits';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
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
  
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'It date ',
    parseValue(value) {
      //value ffro client
      return new Date(value);
    },
    serialize(value) {
      //value sent to the client
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) return new Date(ast.value);
      return null;
    },
  }),
};
