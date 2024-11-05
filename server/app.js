require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const itineraryRoutes = require('./routes/itineraryRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const activityRoutes = require('./routes/activityRoutes');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// CORS Configuration
const allowedOrigins = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'  // Allow local frontend for development
  : '*';  // Allow all origins for deployment

app.use(cors({ origin: allowedOrigins 

}));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/itineraries', itineraryRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/activities', activityRoutes);

if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
