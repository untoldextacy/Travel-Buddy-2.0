import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="inline-flex space-x-4">
        <li>
          <Link to="/" className="hover:underline hover:text-yellow-300 font-semibold">Itinerary List</Link>
        </li>
        <li>
          <Link to="/add-itinerary" className="hover:underline hover:text-yellow-300 font-semibold">Add Itinerary</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
