'use strict'

const { RutinesSchema, RUTINA_TABLE } = require('../models/rutines.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(RUTINA_TABLE, RutinesSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(RUTINA_TABLE)
  }
};