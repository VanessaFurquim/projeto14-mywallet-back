import { db } from "../database/database.config.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

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

export async function signIn (request, response) {
    const { email, password } = request.body

    // validações independentes do db:
    // ambos foram recebidos ? USE OPTIONAL CHAINING const token = auth?.replace("Bearer ", "") if (!token) return 401 "m"
    // if (!email || !password) return response.status(406).send( {message: "Preencha todos os campos."} )

    try {
        const user = await db.collection("users").findOne( { email } )
        if (!user) return response.status(404).send( {message: "Este email ainda não está cadastrado!"} )

        const isPasswordCorrect = bcrypt.compareSync(password, user.password)
        if (!isPasswordCorrect) return response.status(401).send( { message: "Senha inválida" } )

        const token = uuid()
        await db.collection("sessions").insertOne( { token, userId: user._id } )
        response.status(200).send(token)

    } catch (error) { response.status(500).send(error.message) }
}