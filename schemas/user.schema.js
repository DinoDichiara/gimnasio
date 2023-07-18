const Joi = require('joi');

const id = Joi.number().integer();
const nameLastname = Joi.string();
const birthate = Joi.date();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5)
const membershipId = Joi.number().integer()


const createUserSchema = Joi.object({
    nameLastname: nameLastname.required(),
    birthate: birthate.required(),
    email: email.required(),
    password: password.required(),
    role: role.required(),
    membershipId: membershipId.required()
});

const updateUserSchema = Joi.object({
    nameLastname,
    birthate,    
    email,
    role,
    membershipId
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }