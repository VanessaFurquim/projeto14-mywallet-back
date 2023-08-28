import { Router } from "express"

const transactionsRouter = Router()

transactionsRouter.get("/home", listTransactions)

export default transactionsRouter