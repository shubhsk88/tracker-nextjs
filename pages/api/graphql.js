// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ApolloServer, gql } from 'apollo-server-micro';
import connectDB from '../../lib/mongoose';
import { mergeTypeDefs, mergeResolvers } from 'graphql-tools';
import { habitsMutation, habitQuery } from '../../api/habits';
import Habit from '../../api/habits/Habits.graphql';
const fakeTypeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

const fakeResolvers = {
  Query: {
    helloWorld: () => 'HEllo world',
  },
};

const resolvers = mergeResolvers([fakeResolvers, habitQuery, habitsMutation]);
const typeDefs = mergeTypeDefs([Habit, fakeTypeDefs]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: '/api/graphql' });

export default connectDB(server);
// export default (req, res) => {
//   res.status(200).json({ name: 'Shubha' });
// };
// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }
