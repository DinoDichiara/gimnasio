const Joi = require('joi');

const id = Joi.number().integer();
const exercise = Joi.string();
const descriptionExercise = Joi.string();
const categoryId = Joi.number().integer();


const createExerciseSchema = Joi.object({
    exercise: exercise.required(),
    descriptionExercise: descriptionExercise.required(),
    categoryId: categoryId.required()
});

const updateExerciseSchema = Joi.object({
    exercise: exercise,
    descriptionExercise: descriptionExercise,
    categoryId: categoryId
});

const getExerciseSchema = Joi.object({
    id: id.required(),
});

module.exports = { createExerciseSchema, updateExerciseSchema, getExerciseSchema }