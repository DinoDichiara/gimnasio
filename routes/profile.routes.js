const express = require("express");
const passport = require("passport");

const RutinesService = require("../services/rutine.service");

const router = express.Router();
const service = new RutinesService();

router.get(
  "/my-rutines",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const rutines = await service.findByUser(user.sub);
      console.log(req.user);
      res.json(rutines);
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;