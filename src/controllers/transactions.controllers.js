import { db } from "../database/database.config.js"

export async function addTransactions (request, response) {
    const { tipo } = request.params
    const { amount, description } = request.body
    const userId = response.locals.session.userId

    

    try {
        const transaction = { amount, description, date: dayjs().valueOf(), tipo, token, userId }
        await db.collection("transactions").insertOne( transaction )

        response.sendStatus(201)

    } catch (error) { response.status(500).send(error.message) }
}

// export async function listTransactions (request, response) {

//     try {


//     } catch (error) { response.status(500).send(error.message) }
// }