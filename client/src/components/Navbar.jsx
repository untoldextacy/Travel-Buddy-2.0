import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-400 to-purple-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TravelBuddy</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline hover:text-yellow-300 font-semibold transition duration-300">Itinerary List</Link>
          </li>
          <li>
            <Link to="/add-itinerary" className="hover:underline hover:text-yellow-300 font-semibold transition duration-300">Add Itinerary</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
