import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for user in localStorage on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally validate token with backend here
      API.validateToken(token) // Example validation function (create this API call)
        .then((userData) => {
          setUser(userData); // Assuming userData contains the user's info
        })
        .catch(() => {
          setUser(null); // Invalidate if token is not valid
        });
    }
    setLoading(false); // End loading after checking
  }, []);

  const login = async (username, password) => {
    setLoading(true); // Start loading before making the request
    try {
      const { token, user } = await API.login(username, password); // API call to login
      localStorage.setItem('token', token); // Save token in localStorage
      setUser(user); // Set user state with user data from backend
      setLoading(false); // End loading after successful login
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false); // End loading even if there's an error
      throw error;
    }
  };

  const signup = async (username, email, password) => {
    setLoading(true); // Start loading before making the request
    try {
      const { token } = await API.signup(username, email, password); // API call to signup
      await login(username, password); // Log in after successful signup
    } catch (error) {
      console.error('Signup failed:', error);
      setLoading(false); // End loading even if there's an error
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  // Render loading UI if necessary
  if (loading) {
    return <div>Loading...</div>; // This could be a loading spinner or placeholder
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
