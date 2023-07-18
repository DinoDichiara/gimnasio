const express = require('express')

const ExercisesService = require('../services/exercise.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createExerciseSchema, updateExerciseSchema, getExerciseSchema } = require('../schemas/exercise.schema');


const router = express.Router()
const service = new ExercisesService()

router.get('/', async (req, res, next) => {
  try {
    const exercises = await service.find()
    res.json(exercises)
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  validatorHandler(getExerciseSchema, 'params'),
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

router.post('/',
  validatorHandler(createExerciseSchema, 'body'),
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

router.patch('/:id',
  validatorHandler(getExerciseSchema, 'params'),
  validatorHandler(updateExerciseSchema, 'body'),
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

router.delete('/:id',
  validatorHandler(getExerciseSchema, 'params'),
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

module.exports = router         
