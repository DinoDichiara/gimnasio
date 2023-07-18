const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class RutinesService {

    constructor() {}

    async create(data) {
        const newRutine = await models.Rutines.create(data);
        return newRutine;
    }

    async find() {
        const rta = await models.Rutines.findAll()
        return rta
    }

    async findOne(id) {
        const rutine = await models.Rutines.findByPk(id)
        if (!rutine) {
            throw boom.notFound('rutine not found')
        }
        return rutine
    }

    async update(id, changes) {
        const updateRutine = await this.findOne(id)
        await models.Rutines.update(changes, { where: { id } })
        return updateRutine;
    }

    async delete(id) {
        const deleteRutine = await this.findOne(id)
        await models.Rutines.destroy({ where: { id } })
        return deleteRutine
    }
}

module.exports = RutinesService
