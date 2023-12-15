const mongoose = require('mongoose');



const plant = new mongoose.Schema({
  plant: {
    type: String,
    
  },
  disease: {
    type: String,
    
  },
  
});

// Create a User model from the schema
const Auth = mongoose.model('Plant', plant);

module.exports = Auth;
