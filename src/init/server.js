//Core
import http from "http"

// Express App
import {app} from "./app"

// Apollo Server
import "./applyMiddleware"
import {apolloServer} from "./apolloServer"

const server = http.createServer(app)
apolloServer.installSubscriptionHandlers(server)

export {server, apolloServer}
