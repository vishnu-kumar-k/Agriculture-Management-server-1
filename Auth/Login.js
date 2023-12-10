const Auth = require("../Model/User");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {

    const { email, password } = req.body;
    console.log(email)

    // Find the user by email
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.json({status:false, message: "No Account Found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ status:false,message: "Wrong Password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id, name: user.name }, // Include the name in the payload
      process.env.jwtcode,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({ token, name: user.name,status:true,id:user._id }); // Include the name in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { Login };
