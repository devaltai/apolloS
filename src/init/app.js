// Core
import express from "express"
import session from "express-session"
import cors from "cors"

// Options
import {sessionOptions, corsOptions} from "./config"

// Token
import {readToken} from "./readToken"

const app = express()

app.use(session(sessionOptions))
app.use(cors(corsOptions))
app.use(readToken)

export {app}
