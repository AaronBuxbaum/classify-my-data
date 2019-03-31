import { GraphQLServer } from "graphql-yoga";
import { startDB, models } from "./db";
import resolvers from "./graphql/resolvers";

const db = startDB({
  db: "testing",
  url: "database:27017"
});

const context = {
  models,
  db
};

const Server = new GraphQLServer({
  typeDefs: `${__dirname}/graphql/schema.graphql`,
  resolvers,
  context
});

const options = {
  port: 4000
};

Server.start(options, () => {
  console.log(`Server is running on http://database:${options.port}`);
});
