const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity' }]
}, { timestamps: true });
module.exports = mongoose.model('Itinerary', itinerarySchema);