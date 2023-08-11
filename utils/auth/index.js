const passport = require("passport");

const LocalStrategy = require("./strategies/local.strategies");
const JwtSrategy = require("./strategies/jwt.stategies");

passport.use(LocalStrategy);
passport.use(JwtSrategy);
