const { ApolloServer, gql } = require("apollo-server-lambda");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { client, query } = require("./db.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: function() {
    return { client, query };
  },
  playground: true,
  introspection: true
});

exports.handler = server.createHandler();
