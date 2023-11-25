const express = require("express");
const { GenerateOtpForRegister, Register } = require("./Auth/Register");
const { Login } = require("./Auth/Login");
const { ContactUs } = require("./Auth/ContactUs");
const { GetProfile, updateProfile } = require("./Controllers/Profile");
const routers = express.Router();
routers.route("/generateotp").post(GenerateOtpForRegister);
routers.route("/register").post(Register);
routers.route("/login").post(Login)
routers.route("/contactus").post(ContactUs)
routers.route('/getprofile').post(GetProfile)
routers.route('/updateprofile').post(updateProfile)
module.exports = routers;