import joi from "joi"

export const registerUserSchema = joi.object( {
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).required(),
    confirmPassword: joi.string().min(3).required()
} )

export const singInUserSchema = joi.object( {
    email: joi.string().email().required(),
    password: joi.string().min(3).required()
} )