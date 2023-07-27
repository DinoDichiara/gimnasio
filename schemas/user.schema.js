const Joi = require('joi');

const id = Joi.number().integer();
const nameLastname = Joi.string();
const birthdate = Joi.date();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string().min(5)
const membershipId = Joi.number().integer()


const createUserSchema = Joi.object({
    nameLastname: nameLastname.required(),
    birthdate: birthdate.required(),
    email: email.required(),
    password: password.required(),
    role: role.required(),
    membershipId: membershipId.required()
});

const updateUserSchema = Joi.object({
    nameLastname,
    birthdate,    
    email,
    role,
    membershipId
});

const getUserSchema = Joi.object({
    id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }