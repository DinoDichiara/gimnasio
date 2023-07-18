const { Memberships, MembershipSchema } = require('./membership.models');
const { Exercises, ExercisesSchema } = require('./exercises.models');
const { Rutines, RutinesSchema } = require('./rutines.models');
const { Users, UserSchema } = require('./user.models');

function setupModels(sequelize) {
    Memberships.init(MembershipSchema, Memberships.config(sequelize));
    Exercises.init(ExercisesSchema, Exercises.config(sequelize));
    Rutines.init(RutinesSchema, Rutines.config(sequelize));
    Users.init(UserSchema, Users.config(sequelize));

    Memberships.associate(sequelize.models)
    Users.associate(sequelize.models)
    Rutines.associate(sequelize.models)
    Exercises.associate(sequelize.models)
}

module.exports = setupModels