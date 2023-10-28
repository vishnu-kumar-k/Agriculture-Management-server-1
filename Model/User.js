const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true
    
  },
  name: {
    type: String,
    required: true,
    unique:false
    
  },
  
  
  password:{
    type:String,
    required:true
  }
  
 
});

// Create a User model from the schema
const Auth = mongoose.model('Auth', userSchema);

module.exports = Auth;
