const express = require("express");

const RutinesService = require("../services/rutine.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createRutineSchema,
  updateRutineSchema,
  getRutineSchema,
} = require("../schemas/rutine.schema");

const router = express.Router();
const service = new RutinesService();

router.get("/", async (req, res, next) => {
  try {
    const rutines = await service.find();
    res.json(rutines);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getRutineSchema, "params"),
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
  validatorHandler(createRutineSchema, "body"),
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
  validatorHandler(getRutineSchema, "params"),
  validatorHandler(updateRutineSchema, "body"),
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
  validatorHandler(getRutineSchema, "params"),
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
