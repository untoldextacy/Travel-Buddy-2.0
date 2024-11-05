import React, { useState } from 'react';
import ShareItinerary from './ShareItinerary'; // Import the ShareItinerary component

function ItineraryList({ itineraries }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Travel Plans</h2>
      {itineraries.length > 0 ? (
        <ul className="list-none pl-0">
          {itineraries.map(itinerary => (
            <li
              key={itinerary.id}
              className="relative p-4 mb-2 border border-gray-300 rounded-lg transition duration-300 ease-in-out hover:shadow-md cursor-pointer"
              onMouseEnter={() => setHoveredId(itinerary.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="font-semibold text-gray-800">
                {itinerary.destination} - <span className="text-gray-600">{itinerary.date}</span>
              </div>
              {hoveredId === itinerary.id && (
                <div className="absolute left-0 top-full mt-2 bg-gray-800 text-white text-sm rounded p-2 shadow-lg whitespace-nowrap">
                  {itinerary.details || "No additional details"}
                </div>
              )}
              {/* Add the ShareItinerary button here */}
              <div className="mt-4 text-center">
                <ShareItinerary itineraryId={itinerary.id} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No itineraries added yet.</p>
      )}
    </div>
  );
}

export default ItineraryList;