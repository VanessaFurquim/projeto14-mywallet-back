import { Router } from "express"
import { addTransactions } from "../controllers/transactions.controllers.js"

const transactionsRouter = Router()

transactionsRouter.post("/nova-transacao", addTransactions)
// transactionsRouter.get("/home", listTransactions)

export default transactionsRouter