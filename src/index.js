//Core
import {gql} from "apollo-server-express"

//Server
import {server, app} from "./init/server"

//Config
import {PORT} from "./init/config"

const schema = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
}

app.listen({port: PORT}, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
)
