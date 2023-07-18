'use strict'

const { ExercisesSchema, EXERCISES_TABLE } = require('../models/exercises.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(EXERCISES_TABLE, ExercisesSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(EXERCISES_TABLE)
  }
};