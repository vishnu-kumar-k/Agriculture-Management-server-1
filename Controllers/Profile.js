const Auth = require("../Model/User");

const GetProfile = async (req, res) => {
  try {
    const email = req.body.email;

    // Assuming you have an Auth model for authentication
    const auth = await Auth.findOne({ email: email }).exec();

    if (!auth) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Assuming you have a corresponding User model for user details
    const user = await Auth.findOne({ email: email }).exec();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Send user profile information in the response
    res.status(200).json({
      email: user.email,
      name: user.name,
      phoneNumber: user.phoneNumber,
      location: user.location,
      plantType: user.plantType,
      numberOfLands: user.numberOfLands,
      acreage: user.acreage,
      profileImage: user.profileImage,
    });
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const updateProfile = async (req, res) => {
    try {
      const { email, phoneNumber, location, plantType, numberOfLands, acreage } = req.body;
  
      // Check if the Auth model exists
      if (!Auth) {
        return res.status(500).json({ error: 'Auth model not found' });
      }
  
      // Find the user by email
      const user = await Auth.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user profile fields
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.location = location || user.location;
      user.plantType = plantType || user.plantType;
      user.numberOfLands = numberOfLands || user.numberOfLands;
      user.acreage = acreage || user.acreage;
  
      // Save the updated user profile
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = { GetProfile,updateProfile };
