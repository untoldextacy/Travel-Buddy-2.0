import React, { createContext, useContext, useState } from 'react';
import API from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    try {
      const token = await API.login(username, password);
      // Save the token to local storage or any state management
      localStorage.setItem('token', token);
      setUser({ username });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const signup = async (username, email, password) => {
    try {
      await API.signup(username, email, password);
      await login(username, password); // Log in after signing up
    } catch (error) {
      console.error('Signup failed:', error);
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

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
