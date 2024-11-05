const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  destination: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
});
module.exports = mongoose.model('Activity', activitySchema);