import { db } from "../database/database.config.js"

export async function signUp (request, response) {
    const { name, email, password } = req.body

    try {
        const isUserRegistered = await db.collection("users").findOne( { email } )
        if (user) return response.status(409).send("Já há um cadastro com este email!")

    } catch (error) { response.status(500).send(error.message) }
}

export async function signIn (request, response) {
    // receber dados do body (email e senha)
    const { email, passaword } = request.body

    // validações independentes do db:
    // ambos foram recebidos ? USE OPTIONAL CHAINING const token = auth?.replace("Bearer ", "") if (!token) return 401 "m"
    
    // ambos estão de acordo com o schema ? (criar middleware e schema)
    

    try {
        // validações:

        // acesso pela rota "/" com post (route signIn)
        // email está cadastrado ?
        // senha está correta ?

        // sucesso:
        // retornar token
        // 200

    } catch (error) { response.status(500).send(error.message) }
}