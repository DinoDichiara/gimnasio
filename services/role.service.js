const boom = require("@hapi/boom");
const { models } = require("./../libs/sequelize");

class RoleService {
  constructor() {}

  async create(data) {
    const newRole = await models.Roles.create(data);
    return newRole;
  }

  async find() {
    const rta = await models.Roles.findAll();
    return rta;
  }

  async findOne(id) {
    const role = await models.Roles.findByPk(id);
    if (!role) {
      throw boom.notFound("role not found");
    }
    return role;
  }

  async update(id, changes) {
    const updateRole = await this.findOne(id);
    await models.Roles.update(changes, { where: { id } });
    return updateRole;
  }

  async delete(id) {
    const deleteRole = await this.findOne(id);
    await models.Roles.destroy({ where: { id } });
    return deleteRole;
  }
}

module.exports = RoleService;
