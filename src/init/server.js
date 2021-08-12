//Core
import express from "express"
import {ApolloServer} from "apollo-server-express"

//Schema Types
import schema from "./types.graphql"

//Resolver
import {resolvers} from "./resolvers"

// API
import {api as starshipsAPI} from "../bus/starships/dataSource"

const app = express()

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      starshipsAPI,
    }
  },
})

server.applyMiddleware({app})

export {server, app}
