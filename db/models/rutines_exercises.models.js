const { Model, DataTypes, Sequelize } = require("sequelize");

const { RUTINA_TABLE } = require("./rutines.models");
const { EXERCISES_TABLE } = require("./exercises.models");

const RUTINE_EXERCISE_TABLE = "rutines_exercises";

const RutinesExercisesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  rutineId: {
    field: "rutine_id",
    allowNull: true,
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
    allowNull: true,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: EXERCISES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class RutinesExercises extends Model {
  static associate(models) {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: RUTINE_EXERCISE_TABLE,
      modelName: "RutinesExercises",
      timestamps: false,
    };
  }
}

module.exports = { RUTINE_EXERCISE_TABLE, RutinesExercisesSchema, RutinesExercises };
