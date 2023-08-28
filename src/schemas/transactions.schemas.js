import joi from "joi"

export const transactionSchema = joi.object( {
    amount: joi.number().positive().required(),
    description: joi.string().min(3).required()
} )