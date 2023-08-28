import { db } from "../database/database.config.js"

export default async function validateAuth(request, response, next) {
    const { authorization } = request.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return response.sendStatus(401)

    try {
        const session = await db.collection("sessions").findOne( { token } )
        if (!session) return response.status(401).send("Token de antenticação inválido!")

        response.locals.session = session

        next()

    } catch (error) {
        response.status(500).send(error.message)
    }
}