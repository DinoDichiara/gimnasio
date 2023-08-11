const { RutinesExercises, RutinesExercisesSchema, } = require("./rutines_exercises.models");
const { Memberships, MembershipSchema } = require("./membership.models");
const { Categories, CategoriesSchema } = require("./category.models");
const { Exercises, ExercisesSchema } = require("./exercises.models");
const { Rutines, RutinesSchema } = require("./rutines.models");
const { Users, UserSchema } = require("./user.models");
const { Roles, RoleSchema } = require("./role.models");

function setupModels(sequelize) {
  RutinesExercises.init(
    RutinesExercisesSchema,
    RutinesExercises.config(sequelize)
  );
  Memberships.init(MembershipSchema, Memberships.config(sequelize));
  Categories.init(CategoriesSchema, Categories.config(sequelize));
  Exercises.init(ExercisesSchema, Exercises.config(sequelize));
  Rutines.init(RutinesSchema, Rutines.config(sequelize));
  Users.init(UserSchema, Users.config(sequelize));
  Roles.init(RoleSchema, Roles.config(sequelize));

  RutinesExercises.associate(sequelize.models);
  Memberships.associate(sequelize.models);
  Categories.associate(sequelize.models);
  Exercises.associate(sequelize.models);
  Rutines.associate(sequelize.models);
  Users.associate(sequelize.models);
  Roles.associate(sequelize.models);
}

module.exports = setupModels;
