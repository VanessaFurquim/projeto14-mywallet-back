import express, { json } from "express"
import cors from "cors"
import { db } from "../src/database/database.config.js"
import authRouter from "./routes/auth.routes.js"
import transactionsRouter from "./routes/transactions.routes.js"

const app = express()
app.use(json())
app.use(cors())
app.use(authRouter)
app.use(transactionsRouter)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))