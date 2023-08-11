const express = require("express");

const MembershipService = require("./../services/membership.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createMembershipSchema,
  updateMembershipSchema,
  getMembershipSchema,
} = require("../schemas/membership.schema");

const router = express.Router();
const service = new MembershipService();

router.get("/", async (req, res, next) => {
  try {
    const memberships = await service.find();
    res.json(memberships);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getMembershipSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createMembershipSchema, "body"),
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
  validatorHandler(getMembershipSchema, "params"),
  validatorHandler(updateMembershipSchema, "body"),
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
  validatorHandler(getMembershipSchema, "params"),
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
