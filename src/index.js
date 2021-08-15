//Server
import {apolloServer, server} from "./init/server"

//Endpoints
const {graphqlPath, subscriptionsPath} = apolloServer

//Config
import {PORT} from "./init/config"

server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${graphqlPath}`)
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${subscriptionsPath}`
  )
})
