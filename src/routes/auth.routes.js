import { Router } from "express"
import { signIn, signUp } from "../controllers/auth.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.middlewares.js"
import { registerUserSchema, singInUserSchema } from "../schemas/auth.schemas.js"

const authRouter = Router()

authRouter.post("/cadastro", validateSchema(registerUserSchema), signUp)
authRouter.post("/", signIn)

export default authRouter