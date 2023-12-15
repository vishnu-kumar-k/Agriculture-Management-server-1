const PlantModel = require("../Model/plant");
exports.Addplant = async (req, res) => {
    try {
      const { plant, disease } = req.body;
  
      // Validate that both plant and disease are provided
      if (!plant || !disease) {
        return res.status(400).json({ error: 'Plant and disease are required fields' });
      }
  
      // Create a new plant instance
      const newPlant = new PlantModel({ plant, disease });
  
      // Save the new plant entry to the database
      await newPlant.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Plant entry added successfully' });
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error adding plant:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };