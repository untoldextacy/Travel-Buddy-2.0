const ItineraryForm = () => {
    return (
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Create Itinerary</h2>
        <input className="border p-2 w-full mb-4" type="text" placeholder="Destination" />
        {/* Add more fields as needed */}
        <button className="bg-blue-600 text-white p-2 rounded">Add Itinerary</button>
      </form>
    );
  };
  