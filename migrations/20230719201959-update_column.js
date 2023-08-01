"use strict";

const { DataTypes, Sequelize } = require("../../libs/sequelize");

const { RUTINA_TABLE, RutinesSchema } = require("../models/rutines.models");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn(RUTINA_TABLE, "descriptionRutine");
  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(RUTINA_TABLE)
  },
};
