import { Router } from "express"
import { signUp } from "../controllers/auth.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { registerUserSchema } from "../schemas/auth.schemas.js"

const authRouter = Router()

authRouter.post("/cadastro", validateSchema(registerUserSchema), signUp)

export default authRouter