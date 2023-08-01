const { Model, DataTypes, Sequelize } = require("sequelize");

const { MEMBERSHIP_TABLE } = require("./membership.models");
const { ROLE_TABLE } = require("./role.models");

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
  }
};

class Users extends Model {
  static associate(models) {
    this.belongsTo(models.Memberships, { as: "membership" });
    this.belongsTo(models.Roles, { as: "roles" });
    this.hasMany(models.Rutines, {
      as: "rutines",
      foreignKey: "usersId",
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
