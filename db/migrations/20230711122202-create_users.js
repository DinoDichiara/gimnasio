'use strict'

const { UserSchema, USUARIO_TABLE } = require('../models/user.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USUARIO_TABLE, UserSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USUARIO_TABLE)
  }
};