const Joi = require("joi");

const id = Joi.number().integer();
const membership = Joi.string();
const profit = Joi.string();
const price = Joi.string();

const createMembershipSchema = Joi.object({
  membership: membership.required(),
  profit: profit.required(),
  price: price.required(),
});

const updateMembershipSchema = Joi.object({
  membership: membership,
  profit: profit,
  price: price,
});

const getMembershipSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createMembershipSchema,
  updateMembershipSchema,
  getMembershipSchema,
};
