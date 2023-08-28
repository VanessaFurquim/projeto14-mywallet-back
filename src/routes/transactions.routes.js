import { Router } from "express"
import { addTransactions } from "../controllers/transactions.controllers.js"
import validateAuth from "../middlewares/validateAuth.middlewares.js"

const transactionsRouter = Router()

transactionsRouter.use(validateAuth)

transactionsRouter.post("/nova-transacao/:tipo", addTransactions)
// transactionsRouter.get("/home", listTransactions)

export default transactionsRouter