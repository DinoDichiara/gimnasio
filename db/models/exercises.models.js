const { Model, DataTypes, Sequelize } = require("sequelize");
const {CATEGORY_TABLE } = require('./category.models')
const EXERCISES_TABLE = "exercises";

const ExercisesSchema = {
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
    // field: "category_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: "id",
    },
  },
};

class Exercises extends Model {
  static associate(models) {
    this.belongsTo(models.Categories, { as: "category" });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EXERCISES_TABLE,
      modelName: "Exercises",
      timestamps: false,
    };
  }
}

module.exports = { EXERCISES_TABLE, ExercisesSchema, Exercises };
