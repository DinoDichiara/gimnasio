const express = require("express");

const RoleService = require("./../services/role.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createRoleSchema,
  getRoleSchema,
  updateRoleSchema,
} = require("../schemas/role.schema");

const router = express.Router();
const service = new RoleService();

router.get("/", async (req, res, next) => {
  try {
    const roles = await service.find();
    res.json(roles);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createRoleSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getRoleSchema, "params"),
  validatorHandler(updateRoleSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getRoleSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
