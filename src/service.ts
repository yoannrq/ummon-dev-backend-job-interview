import { config } from "./config";

import { fastify } from "fastify";

import fastifyApollo from "@as-integrations/fastify";

import gql from "graphql-tag";

import { ApolloServer } from "@apollo/server";
import { buildSubgraphSchema } from "@apollo/subgraph";

import { readFileSync } from "fs";
import path from "path";
import { resolvers } from "./resolvers";

export async function serve() {
  const server = fastify();

  const typeDefs = gql(
    readFileSync(path.join(__dirname, "schema.graphql")).toString("utf-8")
  );

  const apollo = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs,
      resolvers,
    }),
  });

  await apollo.start();

  await server.register(fastifyApollo(apollo));

  try {
    await server.listen({
      port: config.API_PORT,
      host: "0.0.0.0",
    });
  } catch (err) {
    console.error(err)
    process.exit(1);
  }
}
