const Destination = require('../models/Destination');

// Create Destination
exports.createDestination = async (req, res) => {
  try {
    const { name, description, address, coordinates } = req.body;
    const destination = new Destination({ name, description, address, coordinates });
    await destination.save();
    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Destinations
exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};