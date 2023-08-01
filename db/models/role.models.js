const { Model, DataTypes, Sequelize } = require('sequelize')

const ROLE_TABLE = 'roles'

const RoleSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    role: {
        allowNull: false,
        field: 'name_role',
        type: DataTypes.STRING
    },
    profit: {
        allowNull: false,
        type: DataTypes.TEXT
    }
}

class Roles extends Model {

    static associate(models) {

        this.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'rolesId'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROLE_TABLE,
            modelName: 'Roles',
            timestamps: false
        }
    }
}

module.exports = { ROLE_TABLE, RoleSchema, Roles }