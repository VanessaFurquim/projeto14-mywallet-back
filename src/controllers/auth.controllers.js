import { db } from "../database/database.config.js"
import bcrypt from "bcrypt"

export async function signUp (request, response) {
    const { name, email, password } = request.body

    try {
        const isEmailRegistered = await db.collection("users").findOne( { email } )
        if (isEmailRegistered) return response.status(409).send( { message: "Já há um cadastro com este email!" } )

        const hash = bcrypt.hashSync(password, 12)
        await db.collection("users").insertOne( { name, email, password: hash } )

        response.sendStatus(201)

    } catch (error) { response.status(500).send(error.message) }
}
