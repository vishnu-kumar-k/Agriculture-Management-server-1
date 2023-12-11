require("dotenv").config();
const Auth = require("../Model/User");
const jwt = require("jsonwebtoken");
const Verify = async (req, res) => {
  try {
    console.log("Token:", req.body.jwt);

    const decoded = await jwt.verify(req.body.jwt, process.env.jwtcode);
    console.log("Decoded Token:", decoded);

    const result = await Auth.findOne({ _id: decoded.userId });
    console.log("User from Database:", result);

    if (!result) {
      console.log("User not found in the database");
      res.json({ status: false });
    } else {
      console.log("User found:", result);
      res.json({ status: true, id: decoded.userId, name: result.name });
    }
  } catch (err) {
    console.log(err.message)
    res.json({ status: false });
  }
};

module.exports = Verify;
