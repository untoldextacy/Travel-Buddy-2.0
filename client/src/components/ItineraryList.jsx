import React, { useState } from 'react';

function ItineraryList({ itineraries }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Itinerary List</h2>
      {itineraries.length > 0 ? (
        <ul className="list-none pl-0">
          {itineraries.map(itinerary => (
            <li
              key={itinerary.id}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredId(itinerary.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {itinerary.destination} - {itinerary.date}
              {hoveredId === itinerary.id && (
                <div className="bg-gray-800 text-white text-sm rounded p-2 shadow-lg whitespace-nowrap">
                  {itinerary.details || "No additional details"}
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No itineraries added yet.</p>
      )}
    </div>
  );
}

export default ItineraryList;
