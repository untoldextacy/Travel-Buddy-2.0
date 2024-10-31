const express = require('express');
const { createItinerary, getItineraries, updateItinerary, deleteItinerary } = require('../controllers/itineraryController');
const router = express.Router();
router.post('/', createItinerary);
router.get('/', getItineraries);
router.put('/:id', updateItinerary);
router.delete('/:id', deleteItinerary);
module.exports = router;
