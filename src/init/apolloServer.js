//Core
import express from "express"
import {ApolloServer} from "apollo-server-express"
import session from "express-session"
import cors from "cors"

//Config
import {sessionOptions, corsOptions} from "./config"

//Midleware
import {readToken} from "./readToken"

//Schema Types
import schema from "./types.graphql"

//Resolver
import {resolvers} from "../resolvers"

// API
import {api as starshipsAPI} from "../bus/starships/dataSource"

const app = express()

app.use(session(sessionOptions))
app.use(cors(corsOptions))
app.use(readToken)

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      starshipsAPI,
    }
  },
  context: ({req, res}) => {
    return {req, res}
  },
  playground: {
    settings: {
      "request.credentials": "include",
    },
  },
})

apolloServer.applyMiddleware({app, cors: false})

export {apolloServer, app}
