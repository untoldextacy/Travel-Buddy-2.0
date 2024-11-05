import React from 'react';
import { Link } from 'react-router-dom';

const ShareItinerary = ({ itineraryId }) => {
  return (
    <Link to={`/share/${itineraryId}`}>
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
        Share this Itinerary
      </button>
    </Link>
  );
};

export default ShareItinerary;
