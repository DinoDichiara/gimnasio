'use strict'

const { RUTINE_EXERCISE_TABLE, RutinesExercisesSchema } = require('../models/rutines_exercises.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable( RUTINE_EXERCISE_TABLE, RutinesExercisesSchema )
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable( RUTINE_EXERCISE_TABLE )
  }
};