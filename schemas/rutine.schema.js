const Joi = require('joi');

const id = Joi.number().integer();
const rutine = Joi.string();
const descriptionRutine = Joi.string();
const userId = Joi.number().integer();

const createRutineSchema = Joi.object({
    rutine: rutine.required(),
    descriptionRutine: descriptionRutine.required(),
    userId: userId.required()
});

const updateRutineSchema = Joi.object({
    rutine: rutine,
    descriptionRutine: descriptionRutine,
    userId: userId
});

const getRutineSchema = Joi.object({
    id: id.required(),
});

module.exports = { createRutineSchema, updateRutineSchema, getRutineSchema }