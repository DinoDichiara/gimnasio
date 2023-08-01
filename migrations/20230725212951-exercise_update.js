"use strict";

const { DataTypes, Sequelize } = require("../../libs/sequelize");

const { EXERCISES_TABLE, ExercisesSchema } = require("../models/exercises.models");
const { CATEGORY_TABLE } = require("../models/category.models"); // Importa la constante aquí

module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.addColumn(EXERCISES_TABLE, 'categoryId', {
      field: "category_id",
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: CATEGORY_TABLE,
        key: "id",
      },
    });
  },

  down: async (queryInterface) => {
    // await queryInterface.removeColumn(EXERCISES_TABLE, 'categoryId');
  },
};
