"use strict";
const { DataTypes, Sequelize } = require("sequelize");

const { RUTINE_EXERCISE_TABLE } = require("../models/rutines_exercises.models");
const { MEMBERSHIP_TABLE } = require("../models/membership.models");
const { EXERCISES_TABLE } = require("../models/exercises.models");
const { CATEGORY_TABLE } = require("../models/category.models");
const { RUTINA_TABLE } = require("../models/rutines.models");
const { USUARIO_TABLE } = require("../models/user.models");
const { ROLE_TABLE, RoleSchema } = require("../models/role.models");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ROLE_TABLE, RoleSchema);

    await queryInterface.createTable(MEMBERSHIP_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      membership: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      profit: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });

    await queryInterface.createTable(USUARIO_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nameLastname: {
        allowNull: false,
        field: "name_lastname",
        type: DataTypes.STRING,
      },
      birthdate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      recoveryToken: {
        field: "recovery_token",
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW,
      },
      membershipId: {
        field: "membership_id",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: MEMBERSHIP_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      rolesId: {
        field: "role_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: ROLE_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });

    await queryInterface.createTable(RUTINA_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      rutine: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descriptionRutine: {
        field: "description_rutine",
        allowNull: false,
        type: DataTypes.TEXT,
      },
      usersId: {
        field: "user_id",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: USUARIO_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });

    await queryInterface.createTable(CATEGORY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
        defaultValue: Sequelize.NOW,
      },
    });

    await queryInterface.createTable(EXERCISES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      exercise: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descriptionExercise: {
        field: "description_exercise",
        allowNull: true,
        type: DataTypes.TEXT,
      },
      categoryId: {
        field: "category_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CATEGORY_TABLE,
          key: "id",
        },
      },
    });

    await queryInterface.createTable(RUTINE_EXERCISE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      rutineId: {
        field: "rutine_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          model: RUTINA_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      exerciseId: {
        field: "exercise_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
          model: EXERCISES_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MEMBERSHIP_TABLE);
    await queryInterface.dropTable(RUTINE_EXERCISE_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(RUTINA_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(EXERCISES_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
  },
};
