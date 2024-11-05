import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItineraryForm from './components/ItineraryForm';
import ItineraryList from './components/ItineraryList';
import ShareItineraryPage from './components/ShareItineraryPage';

function App() {
  const [itineraries, setItineraries] = useState([]);

  const addItinerary = (newItinerary) => {
    setItineraries([...itineraries, { id: itineraries.length + 1, ...newItinerary }]);
  };

  const deleteItinerary = (id) => {
    setItineraries(itineraries.filter(itinerary => itinerary.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="text-center p-4 bg-white shadow-lg rounded-lg m-4">
          <h1 className="text-4xl font-bold text-blue-600">Travel Buddy</h1>
          <p className="text-gray-600">An interactive Travel Planner</p>
        </div>
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<ItineraryList itineraries={itineraries} />} />
            <Route path="/add-itinerary" element={<ItineraryForm addItinerary={addItinerary} />} />
            <Route path="/share/:id" element={<ShareItineraryPage itineraries={itineraries} deleteItinerary={deleteItinerary} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
