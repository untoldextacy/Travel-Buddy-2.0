import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const mapContainerStyle = {
  height: "300px", // Adjust height as necessary
  width: "100%"
};

const defaultCenter = {
  lat: 37.7749, // Default center (San Francisco)
  lng: -122.4194
};

function ItineraryForm({ addItinerary }) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter); // State for selected location
  const navigate = useNavigate();

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const itineraryData = { destination, date, details, location: selectedLocation }; // Include selected location
    addItinerary(itineraryData);

    // Reset form fields
    setDestination('');
    setDate('');
    setDetails('');
    setSelectedLocation(defaultCenter); // Reset selected location

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

        {/* Google Maps Integration */}
        <div className="mb-4">
          <label className="block mb-2 text-gray-700">Select Location on Map</label>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={selectedLocation}
              zoom={10}
              onClick={handleMapClick}
            >
              <Marker position={selectedLocation} />
            </GoogleMap>
          </LoadScript>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-blue-500 focus:outline-none">
          Add Itinerary
        </button>
      </form>
    </div>
  );
}

export default ItineraryForm;
