const Joi = require('joi');

const id = Joi.number().integer();
const category = Joi.string();
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
    category: category.required(),
    image: image.required(),
});

const updateCategorySchema = Joi.object({
    category: category,
    image: image
});

const getCategorySchema = Joi.object({
    id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }