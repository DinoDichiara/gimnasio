const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class MembershipService {

    constructor() {}

    async create(data) {
        const newMembership = await models.Memberships.create(data);
        return newMembership;
    }

    async find() {
        const rta = await models.Memberships.findAll()
        return rta
    }

    async findOne(id) {
        const membership = await models.Memberships.findByPk(id)
        if (!membership) {
            throw boom.notFound('membership not found')
        }
        return membership
    }

    async update(id, changes) {
        const updateMembership = await this.findOne(id)
        await models.Memberships.update(changes, { where: { id } })
        return updateMembership;
    }

    async delete(id) {
        const deleteMembership = await this.findOne(id)
        await models.Memberships.destroy({ where: { id } })
        return deleteMembership
    }
}

module.exports = MembershipService