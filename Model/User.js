const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: false
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: false  // You can adjust this based on your requirements
  },
  location: {
    type: String,
    required: false
  },
  plantType: {
    type: String,
    required: false
  },
  numberOfLands: {
    type: Number,
    required: false
  },
  acreage: {
    type: Number,
    required: false
  },
  profileImage: {
    type: String,  // Assuming you store the image path as a string
    required: false
  }
});

// Create a User model from the schema
const Auth = mongoose.model('Auth', userSchema);

module.exports = Auth;
