const Auth = require("../Model/User");
const sendEmailVerification = require("./SendEmailVerification");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const GenerateOtpForRegister = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const existingUser = await Auth.findOne({ email: email });

  if (existingUser) {
    // If the email already exists, respond with an error
    return res.json({ msg: "Email already exists" ,status:false});
  } else {
    const otp = generateOTP();
    sendEmailVerification(email, otp);
    return res.json({ Otp: otp, msg: "Otp has been send to mail",status:true });
  }
};
//Adding to DB

const Register = async (req, res) => {
  const { email, name,  password } =
    req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds as needed (e.g., 10)

    const newUser = new Auth({
      email,
      name,
     
      password: hashedPassword, // Store the hashed password in the database
    });

    // Save the new user to the database
    const savedUser = await newUser.save();
    console.log(savedUser);
    const token = jwt.sign({ userId: savedUser._id }, process.env.jwtcode, {
      expiresIn: "7d",
    });

    res.status(201).json({ msg: "User registered successfully", token,status:true });
  } catch (err) {
    console.log(err);
    res.json({ err: err });
  }
};

//OTP Generation
function generateOTP() {
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  GenerateOtpForRegister,
  Register,
};
