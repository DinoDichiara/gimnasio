const { Strategy } = require("passport-local");

const AuthServise = require("./../../../services/auth.service");

const service = new AuthServise();

const LocalStrategy = new Strategy(
  {
    usernameField: "email",
  },
  async (email, password, done) => {
    try {
      const user = await service.getUser(email, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
