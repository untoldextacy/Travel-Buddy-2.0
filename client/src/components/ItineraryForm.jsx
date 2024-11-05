import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function ItineraryForm({ addItinerary }) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const itineraryData = { destination, date, details };
    addItinerary(itineraryData); // Call the addItinerary function

    // Reset form fields
    setDestination('');
    setDate('');
    setDetails('');

    // Navigate back to the itinerary list page
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 p-6 rounded-lg shadow-lg mb-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-4">Add Your Itinerary</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="destination" className="block mb-2 text-gray-700">Destination</label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2 text-gray-700">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block mb-2 text-gray-700">Details</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-blue-500 focus:outline-none">
          Add Itinerary
        </button>
      </form>
    </div>
  );
}

export default ItineraryForm;
