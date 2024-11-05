const Activity = require('../models/Activity');

// Create Activity
exports.createActivity = async (req, res) => {
  try {
    const { name, description, destination } = req.body;
    const activity = new Activity({ name, description, destination });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Activities
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().populate('destination');
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};