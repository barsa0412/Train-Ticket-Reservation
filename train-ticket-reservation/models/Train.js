const mongoose = require('mongoose');

const trainSchema = mongoose.Schema({
  name: { type: String, required: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  availableSeats: { type: Number, required: true },
});

module.exports = mongoose.model('Train', trainSchema);
