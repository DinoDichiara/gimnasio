const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CategoryService {

    constructor() {}

    async create(data) {
        const newCategory = await models.Categories.create(data);
        return newCategory;
    }

    async find() {
        const rta = await models.Categories.findAll({ 
            include: [{ all: true}]
        })
        return rta
    }

    async findOne(id) {
        const category = await models.Categories.findByPk(id)
        if (!category) {
            throw boom.notFound('category not found')
        }
        return category
    }

    async update(id, changes) {
        const updateCategories = await this.findOne(id)
        await models.Categories.update(changes, { where: { id } })
        return updateCategories;
    }

    async delete(id) {
        const deleteCategories = await this.findOne(id)
        await models.Categories.destroy({ where: { id } })
        return deleteCategories
    }
}

module.exports = CategoryService
