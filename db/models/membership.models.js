const { Model, DataTypes, Sequelize } = require("sequelize");

const MEMBERSHIP_TABLE = "memberships";

const MembershipSchema = {
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
};

class Memberships extends Model {
  static associate(models) {
    this.hasMany(models.Users, {
      as: "users",
      foreignKey: "membershipId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEMBERSHIP_TABLE,
      modelName: "Memberships",
      timestamps: false,
    };
  }
}

module.exports = { MEMBERSHIP_TABLE, MembershipSchema, Memberships };
