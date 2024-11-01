import React from 'react';
import { Link } from 'react-router-dom';

const ShareItinerary = ({ itineraryId }) => {
  return (
    <Link to={`/share/${itineraryId}`}>
      <button>Share this Itinerary</button>
    </Link>
  );
};

export default ShareItinerary;
