const { DataTypes, Model, Sequelize } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategoriesSchema = {
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
};

class Categories extends Model {
  static associate(models) {
    this.hasMany(models.Exercises, {
      as: "exercises",
      foreignKey: "categoryId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Categories",
      timestamps: false,
    };
  }
}

module.exports = { CATEGORY_TABLE, CategoriesSchema, Categories };
