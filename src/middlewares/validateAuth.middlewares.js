import { db } from "../database/database.config.js"

export default async function validateAuth(request, response, next) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.sendStatus(401)

    try {
        const session = await db.collection("sessions").findOne( { token } )
        if (!session) return res.status(401).send("Token de antenticação inválido!")

        res.locals.session = session

        next()

    } catch(err) {
        response.status(500).send(error.message)
    }
}