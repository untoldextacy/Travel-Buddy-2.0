const mongoose = require('mongoose');
const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
});
module.exports = mongoose.model('Destination', destinationSchema);