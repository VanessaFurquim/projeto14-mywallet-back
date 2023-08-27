import express, { json } from "express"
import cors from "cors"
import { db } from "../src/database/database.config.js"
import { signUp } from "./controllers/auth.controllers.js"
import authRouter from "./routes/auth.routes.js"

const app = express()
app.use(json())
app.use(cors())
app.use(authRouter)

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))