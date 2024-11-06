import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItineraryForm from './components/ItineraryForm';
import ItineraryList from './components/ItineraryList';
import ShareItineraryPage from './components/ShareItineraryPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [itineraries, setItineraries] = useState([]);

  // Load itineraries from localStorage when the app loads
  useEffect(() => {
    const storedItineraries = JSON.parse(localStorage.getItem('itineraries')) || [];
    setItineraries(storedItineraries);
  }, []);

  // Save itineraries to localStorage whenever they change
  useEffect(() => {
    if (itineraries.length > 0) {
      localStorage.setItem('itineraries', JSON.stringify(itineraries));
    }
  }, [itineraries]);

  // Function to add a new itinerary
  const addItinerary = (newItinerary) => {
    const updatedItineraries = [...itineraries, newItinerary];
    setItineraries(updatedItineraries);
    localStorage.setItem('itineraries', JSON.stringify(updatedItineraries)); // Update localStorage
  };

  // Function to delete an itinerary
  const deleteItinerary = (id) => {
    // Filter out the itinerary that matches the given id
    const updatedItineraries = itineraries.filter(itinerary => itinerary.id !== id);
    setItineraries(updatedItineraries);
    localStorage.setItem('itineraries', JSON.stringify(updatedItineraries)); // Update localStorage
  };

  return (
    <AuthProvider>
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
              <Route
                path="/share/:id"
                element={<ShareItineraryPage itineraries={itineraries} deleteItinerary={deleteItinerary} />}
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}



export default App;
