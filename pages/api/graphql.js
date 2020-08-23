// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ApolloServer, gql } from 'apollo-server-micro';
// import '../../lib/mongoose'

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => 'HEllo world',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
// export default (req, res) => {
//   res.status(200).json({ name: 'Shubha' });
// };
// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe' })
// }
