import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItineraryForm from './components/ItineraryForm';
import ItineraryList from './components/ItineraryList';

function App() {
  const [itineraries, setItineraries] = useState([]);

  const addItinerary = (newItinerary) => {
    setItineraries([...itineraries, { id: itineraries.length + 1, ...newItinerary }]);
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold text-blue-600">Travel Itinerary Planner</h1>
      <p className="text-gray-700">Plan your trips efficiently and easily!</p>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<ItineraryList itineraries={itineraries} />} />
              <Route path="/add-itinerary" element={<ItineraryForm addItinerary={addItinerary} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
