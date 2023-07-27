'use strict'

const { CATEGORY_TABLE, CategoriesSchema } = require('../models/category.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable( CATEGORY_TABLE, CategoriesSchema )
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable( CATEGORY_TABLE )
  }
};