import joi from "joi"

export const transactionSchema = joi.object( {
    amount: joi.string().positive().required(),
    description: joi.string().min(3).required()
} )