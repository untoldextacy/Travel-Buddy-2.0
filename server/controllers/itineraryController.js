const Itinerary = require('../models/Itinerary');

// Create Itinerary
exports.createItinerary = async (req, res) => {
  try {
    const { name, description, destinations, activities } = req.body;
    const itinerary = new Itinerary({
      name,
      description,
      user: req.user.id,
      destinations,
      activities,
    });
    await itinerary.save();
    res.status(201).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get User's Itineraries
exports.getItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ user: req.user.id }).populate('destinations activities');
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Itinerary
exports.updateItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete Itinerary
exports.deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);
    res.json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};