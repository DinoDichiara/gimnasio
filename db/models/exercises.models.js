const { Model, DataTypes, Sequelize } = require('sequelize')

const EXERCISES_TABLE = 'exercises'

const ExercisesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    exercise: {
        allowNull: false,
        type: DataTypes.STRING
    },
    descriptionExercise: {
        allowNull: true,
        type: DataTypes.TEXT
    }
}

class Exercises extends Model {
    static associate() {
        //
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: EXERCISES_TABLE,
            modelName: 'Exercises',
            timestamps: false
        }
    }
}

module.exports = { EXERCISES_TABLE, ExercisesSchema, Exercises }