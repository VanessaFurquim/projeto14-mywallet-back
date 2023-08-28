import { db } from "../database/database.config.js"

export async function addTransactions (request, response) {
    const { type } = request.params
    const { amount, description } = request.body

    try {
        await db.collection("transactions").insertOne( { amount, description, type } )
        response.sendStatus(201)

    } catch (error) { response.status(500).send(error.message) }
}

// export async function listTransactions (request, response) {

//     try {


//     } catch (error) { response.status(500).send(error.message) }
// }