const { Model, DataTypes, Sequelize } = require('sequelize')
const { USUARIO_TABLE } = require('./user.models');

const RUTINA_TABLE = 'rutines'

const RutinesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    rutine: {
        allowNull: false,
        type: DataTypes.STRING
    },
    descriptionRutine: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: USUARIO_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
}

class Rutines extends Model {
    static associate(models) {
        this.belongsTo(models.Users, { as: 'users'} )
        // this.belongsTo(models.Exercises, { as: 'exercises' })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: RUTINA_TABLE,
            modelName: 'Rutines',
            timestamps: false   
        }
    }
}

module.exports = { RUTINA_TABLE, RutinesSchema, Rutines }