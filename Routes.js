const express = require("express");
const { GenerateOtpForRegister, Register } = require("./Auth/Register");
const { Login } = require("./Auth/Login");
const routers = express.Router();
routers.route("/generateotp").post(GenerateOtpForRegister);
routers.route("/register").post(Register);
routers.route("/login").post(Login)
module.exports = routers;