const Joi = require("joi");

const id = Joi.number().integer();
const nameLastname = Joi.string();
const birthdate = Joi.date();
const email = Joi.string().email();
const password = Joi.string().min(8);
const rolesId = Joi.number().integer();
const membershipId = Joi.number().integer();

const createUserSchema = Joi.object({
  nameLastname: nameLastname.required(),
  birthdate: birthdate.required(),
  email: email.required(),
  password: password.required(),
  rolesId: rolesId.required(),
  membershipId: membershipId,
});

const updateUserSchema = Joi.object({
  nameLastname,
  birthdate,
  email,
  rolesId,
  membershipId,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
