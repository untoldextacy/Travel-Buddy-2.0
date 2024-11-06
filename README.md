
# Travel-Buddy
![Travel Buddy](/client/public/assets/svg/travel-buddy.webp)

A collaborative web application that helps users plan their trips by suggesting destinations, activities, and accommodations. Users can create itineraries, share them with friends via email, and manage their travel plans easily.


![Main Page](https://github.com/user-attachments/assets/591d8877-6ae5-4906-a998-9b27a532cee9)


## Deployed Site
you can click this link to visit the deployed site [Travel Buddy](https://travel-buddy-sy8m.onrender.com/)


## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Developers](#developers)

## Features
- **User Authentication**: Secure registration and login with JSON Web Tokens (JWT).
- **Itinerary Management**: Create, update, and delete itineraries, as well as view travel itineraries.
- **Collaboration**: Share itineraries with friends via email.
- **Responsive Design**: Mobile-friendly interface for on-the-go access.
- **Interactive UI**: Dynamic components with real-time updates.
- **API-First Design**: Clean, RESTful API endpoints to support a dynamic front-end experience.
- **CORS Configuration**: Allows safe cross-origin requests from the client app.

## Technologies Used
- **Frontend**: React, Apollo Client, GraphQL, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (NoSQL) for efficient data storage and retrieval.
- **Authentication**: JWT (JSON Web Tokens) for user sessions.
- **Collaboration**: Nodemailer for sharing itineraries via email.
- **Styling**: CSS, Tailwind CSS
- **Development Tools**:
  - **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
  - **dotenv**: Module to manage environment variables securely.
  - **Supertest** and **Jest**: For API endpoint testing and unit testing.

### 3rd Party APIs Used
- **Google Places API**: Provides destination details for popular locations.
- **OpenWeatherMap API**: Supplies weather data for trip planning and local conditions.
- **Eventbrite API**: Retrieves local event information based on the travel itinerary.

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** instance (local or cloud).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MiguelPena0101/Travel-Buddy
   cd travel-buddy
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Build the Client** (if applicable):
   ```bash
   npm run build
   ```

4. **Environment Variables**:
   - Edit the `.env.EXAMPLE` file in the `/server` directory and add your MongoDB URI, JWT secret, and API keys:
     ```plaintext
     MONGO_URI=your_mongo_database_uri
     JWT_SECRET=your_jwt_secret_key
     GOOGLE_PLACES_API_KEY=your_google_places_api_key
     OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
     EVENTBRITE_API_KEY=your_eventbrite_api_key
     NODE_ENV=development
     ```

5. **Run the Server**:
   ```bash
   npm start
   ```

## API Endpoints
The following endpoints are available:

### Authentication
- **POST** `/api/auth/register`: Registers a new user.
- **POST** `/api/auth/login`: Authenticates a user and returns a JWT token.

### Itineraries
- **POST** `/api/itineraries`: Creates a new itinerary.
- **GET** `/api/itineraries`: Retrieves all itineraries for the logged-in user.
- **PUT** `/api/itineraries/:id`: Updates an itinerary by ID.
- **DELETE** `/api/itineraries/:id`: Deletes an itinerary by ID.

### Destinations
- **POST** `/api/destinations`: Adds a destination to an itinerary.
- **GET** `/api/destinations`: Retrieves destinations.

### Activities
- **POST** `/api/activities`: Adds an activity to a destination.
- **GET** `/api/activities`: Retrieves activities.

## Developers
- [Brittany Reyes](https://github.com/brittanykreyes)
- [Chuck Van-Lare](https://github.com/untoldextacy)
- [Miguel Pena](https://github.com/MiguelPena0101)
