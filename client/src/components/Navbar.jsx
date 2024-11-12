import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth(); // Get authentication state
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function to log the user out
    navigate('/login'); // Redirect the user to the login page after logging out
  };

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
          {!user ? (
            <>
              <li>
                <Link to="/login" className="hover:underline hover:text-yellow-300 font-semibold transition duration-300">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline hover:text-yellow-300 font-semibold transition duration-300">Sign Up</Link>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout} className="hover:underline hover:text-yellow-300 font-semibold transition duration-300">Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
