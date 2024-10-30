const ItineraryList = ({ itineraries }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {itineraries.map(itinerary => (
          <div key={itinerary._id} className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold">{itinerary.destination}</h3>
            {/* Display other itinerary details */}
          </div>
        ))}
      </div>
    );
  };
  