const Joi = require('joi');

const id = Joi.number().integer();
const exercise = Joi.string();
const descriptionExercise = Joi.string();

const createExerciseSchema = Joi.object({
    exercise: exercise.required(),
    descriptionExercise: descriptionExercise.required()
});

const updateExerciseSchema = Joi.object({
    exercise: exercise,
    descriptionExercise: descriptionExercise
});

const getExerciseSchema = Joi.object({
    id: id.required(),
});

module.exports = { createExerciseSchema, updateExerciseSchema, getExerciseSchema }