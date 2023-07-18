const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class ExercisesService {

    constructor() {}

    async create(data) {
        const newExercise = await models.Exercises.create(data);
        return newExercise;
    }

    async find() {
        const rta = await models.Exercises.findAll()
        return rta
    }

    async findOne(id) {
        const exercise = await models.Exercises.findByPk(id)
        if (!exercise) {
            throw boom.notFound('exercise not found')
        }
        return exercise
    }

    async update(id, changes) {
        const updateExercise = await this.findOne(id)
        await models.Exercises.update(changes, { where: { id } })
        return updateExercise;
    }

    async delete(id) {
        const deleteExercise = await this.findOne(id)
        await models.Exercises.destroy({ where: { id } })
        return deleteExercise
    }
}

module.exports = ExercisesService