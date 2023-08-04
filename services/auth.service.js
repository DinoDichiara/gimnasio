const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { config } = require("./../config/config");

const UserService = require("./user.service");
const service = new UserService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      rolesId: user.rolesId,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }
  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: config.mail,
        pass: config.pass,
      },
    });
    await transporter.sendMail({
      from: config.mail, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Éste es un mensaje automatico", // Subject line
      text: "En una hora estoy allá, esperame con los mates", // plain text body
      html: "<b>En una hora estoy allá, esperame con los mates</b>", // html body
    });
    return { message: 'mail sent'}
  }
}

module.exports = AuthService;
