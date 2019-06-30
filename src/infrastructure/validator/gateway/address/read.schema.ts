import * as Joi from 'joi'

export const Schema =  Joi.object({
    id : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
})

export enum ERROR_CODE{
    id=4001
}