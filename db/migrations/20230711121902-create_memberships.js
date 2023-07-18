'use strict'

const { MembershipSchema, MEMBERSHIP_TABLE } = require('../models/membership.models');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(MEMBERSHIP_TABLE, MembershipSchema)
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MEMBERSHIP_TABLE)
  }
};
