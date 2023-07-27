const Joi = require('joi');

const id = Joi.number().integer();
const rutineId = Joi.number().integer();
const exerciseId = Joi.number().integer();

const createRutineExerciseSchema = Joi.object({
    rutineId: rutineId.required(),
    exerciseId: exerciseId.required()
});

const updateRutineExerciseSchema = Joi.object({
    rutineId: rutineId,
    exerciseId: exerciseId
});

const getRutineExerciseSchema = Joi.object({
    id: id.required(),
});

module.exports = { createRutineExerciseSchema, updateRutineExerciseSchema, getRutineExerciseSchema }