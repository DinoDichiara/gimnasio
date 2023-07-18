const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class UserService {

    constructor() {}

    async create(data) {
        const user = await models.Users.findOne({ where: { email: data.email } });
        if (user) {
            throw boom.badData('El email ingresado ya está registrado');
        }
        const newUser = await models.Users.create(data);
        return newUser;
    }

    async find() {
        const rta = await models.Users.findAll({ 
            include: [{ all: true}]
        })
        return rta
    }

    async findOne(id) {
        const user = await models.Users.findByPk(id, {
            include: [{ all: true }]
        })
        if (!user) {
            throw boom.notFound('user not found')
        }
        return user
    }

    async update(id, changes) {
        const users = await this.findOne(id)
        const email = await models.Users.findOne({
            where: { email: changes.email },
        });
        if (email) {
            throw boom.badData('El email ingresado ya está registrado')
        }
        const updateUser = await users.update(changes);
        return updateUser;
    }

    async delete(id) {
        const deleteUser = await this.findOne(id)
        await models.Users.destroy({ where: { id } })
        return deleteUser
    }
}

module.exports = UserService