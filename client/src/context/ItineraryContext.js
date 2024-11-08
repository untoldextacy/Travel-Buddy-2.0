import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetch current weather
  const fetchWeather = async (lat, lon) => {
    try {
      const response = await axios.get(`/api/destinations/weather?lat=${lat}&lon=${lon}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  // Fetch 7-day weather forecast
  const fetchForecast = async (lat, lon) => {
    try {
      const response = await axios.get(`/api/destinations/forecast?lat=${lat}&lon=${lon}`);
      setForecast(response.data.daily); // Assuming 'daily' contains 7-day forecast data
    } catch (error) {
      console.error('Error fetching 7-day forecast:', error);
    }
  };

  // Fetch events for a given location
  const fetchEvents = async (location) => {
    try {
      const response = await axios.get(`/api/destinations/events?location=${location}`);
      setEvents(response.data.events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <ItineraryContext.Provider value={{ weather, forecast, events, fetchWeather, fetchForecast, fetchEvents }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => useContext(ItineraryContext);
