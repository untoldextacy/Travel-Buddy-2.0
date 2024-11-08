/* const API_URL = 'http://localhost:5000/api'; */ // Change this to your API URL
const API_URL = 'https://travel-buddy-sy8m.onrender.com/api'; 

const login = async (username, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return data.token; // Assuming the server returns a JWT token
};

const signup = async (username, email, password) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  const data = await response.json();
  return data.token; // Assuming the server returns a JWT token
};

export default { login, signup };
