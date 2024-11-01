import React, { useState } from 'react';

function ItineraryForm({ addItinerary }) {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const itineraryData = { destination, date, details }; 
    addItinerary(itineraryData);

   
    setDestination('');
    setDate('');
    setDetails('');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold">Add Itinerary</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="destination" className="block mb-2">Destination</label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="details" className="block mb-2">Details</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border p-2 w-full"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Itinerary
        </button>
      </form>
    </div>
  );
}

export default ItineraryForm;
