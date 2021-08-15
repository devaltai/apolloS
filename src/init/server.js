//Core
import http from "http"
import {app, apolloServer} from "./apolloServer"

const server = http.createServer(app)
apolloServer.installSubscriptionHandlers(server)

export {server, apolloServer}
