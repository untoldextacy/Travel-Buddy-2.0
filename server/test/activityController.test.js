const request = require('supertest');
const { app, connectToDatabase } = require('../app');
const mongoose = require('mongoose');
const Activity = require('../models/Activity');
const { getEventsForLocation } = require('../services/apiService');

jest.mock('../services/apiService', () => ({
  getEventsForLocation: jest.fn(), // Mock getEventsForLocation directly
}));

beforeAll(async () => {
  await connectToDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Activity Controller Tests', () => {
  it('should create a new activity', async () => {
    const activityData = {
      name: 'Visit the Louvre',
      description: 'Guided tour of the Louvre Museum',
      destination: 'someDestinationId',
    };

    const mockSave = jest.fn().mockResolvedValue(activityData);
    Activity.prototype.save = mockSave;

    const res = await request(app)
      .post('/api/activities')
      .send(activityData);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Visit the Louvre');
  });

  it('should fetch all activities', async () => {
    const activities = [
      { name: 'Visit the Eiffel Tower', description: 'Tour the Eiffel Tower', destination: 'someDestinationId' },
      { name: 'Boat tour on the Seine', description: 'Relaxing boat tour', destination: 'someDestinationId' },
    ];

    jest.spyOn(Activity, 'find').mockResolvedValue(activities);

    const res = await request(app).get('/api/activities');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });

  it('should fetch local events for a given location', async () => {
    const mockEventsData = [{ name: 'Music Festival', description: 'Annual festival' }];
    
    // Mock getEventsForLocation to return mockEventsData
    getEventsForLocation.mockResolvedValue(mockEventsData);

    const res = await request(app).get('/api/activities/events').query({ location: 'Paris' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toEqual(mockEventsData);
  });
});
