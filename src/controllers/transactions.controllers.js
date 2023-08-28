import { db } from "../database/database.config.js"
import dayjs from "dayjs"

export async function addTransactions (request, response) {
    const { tipo } = request.params
    const { amount, description } = request.body


    const userId = response.locals.session.userId
    const token = response.locals.session.token

    console.log(response.locals.session)

    try {
        const transaction = { amount, description, date: dayjs().valueOf(), tipo, token, userId }
        await db.collection("transactions").insertOne( transaction )

        response.sendStatus(201)

    } catch (error) {
        console.log(error)
        response.status(500).send(error.message)
    }
}

// export async function listTransactions (request, response) {

//     try {


//     } catch (error) { response.status(500).send(error.message) }
// }