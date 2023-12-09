const Auth = require("../Model/User");

const GetProfile = async (req, res) => {
  try {
    const id = req.params.id; // Change to use parameters from the URL

    const user = await Auth.findOne({ id }).exec();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

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
    const { id, phoneNumber, location, plantType, numberOfLands, acreage } = req.body;

    const user = await Auth.findOne({ id });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.location = location || user.location;
    user.plantType = plantType || user.plantType;
    user.numberOfLands = numberOfLands || user.numberOfLands;
    user.acreage = acreage || user.acreage;

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { GetProfile, updateProfile };
