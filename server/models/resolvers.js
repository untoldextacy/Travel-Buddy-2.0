const User = require('../models/User');
const Itinerary = require('../models/Itinerary');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config/keys');
const nodemailer = require('nodemailer');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    itineraries: async () => await Itinerary.find(),
    itinerary: async (_, { id }) => await Itinerary.findById(id),
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      return user;
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('User not found');
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Invalid password');
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      return { token };
    },
    addItinerary: async (_, { userId, destination, activities }) => {
      const itinerary = new Itinerary({ userId, destination, activities });
      await itinerary.save();
      return itinerary;
    },
    shareItinerary: async (_, { itineraryId, email }) => {
      const itinerary = await Itinerary.findById(itineraryId);
      if (!itinerary) throw new Error('Itinerary not found');

      // Setup email transport
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Shared Itinerary: ${itinerary.destination}`,
        text: `Check out this itinerary: ${itinerary.destination} with activities: ${itinerary.activities.join(', ')}`,
      };

      await transporter.sendMail(mailOptions);

      return itinerary;
    },
  },
};

module.exports = resolvers;
