const { Model, DataTypes, Sequelize } = require("sequelize");

const { MEMBERSHIP_TABLE } = require("./membership.models");

const USUARIO_TABLE = "users";

const UserSchema = {
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "users",
  },
  membershipId: {
    field: "membership_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: MEMBERSHIP_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Users extends Model {
  static associate(models) {
    this.belongsTo(models.Memberships, { as: "membership" });
    this.hasMany(models.Rutines, {
      as: "rutines",
      foreignKey: "userId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: "Users",
      timestamps: false,
    };
  }
}

module.exports = { USUARIO_TABLE, UserSchema, Users };
