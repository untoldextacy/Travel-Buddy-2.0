const request = require('supertest');
const { app, connectToDatabase } = require('../app');
const mongoose = require('mongoose');
const axios = require('axios');

jest.mock('axios');

beforeAll(async () => {
  await connectToDatabase();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Destination Controller Tests', () => {
  it('should create a new destination', async () => {
    const res = await request(app)
      .post('/api/destinations')
      .send({
        name: 'Eiffel Tower',
        description: 'Famous tower in Paris',
        address: 'Paris, France',
        coordinates: { lat: 48.8584, lon: 2.2945 },
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Eiffel Tower');
  });

  it('should fetch all destinations', async () => {
    const res = await request(app).get('/api/destinations');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should search for a place', async () => {
    const mockPlacesData = [{ name: 'Eiffel Tower', place_id: '123' }];
    axios.get.mockResolvedValue({ data: { results: mockPlacesData } });

    const res = await request(app).get('/api/destinations/search').query({ query: 'Eiffel Tower' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toEqual(mockPlacesData);
  });

  it('should get weather for a destination', async () => {
    const mockWeatherData = { main: { temp: 15 }, weather: [{ description: 'clear sky' }] };
    axios.get.mockResolvedValue({ data: mockWeatherData });

    const res = await request(app).get('/api/destinations/weather').query({ lat: 48.8584, lon: 2.2945 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('main');
    expect(res.body.main).toEqual(mockWeatherData.main);
  });

  it('should get events for a location', async () => {
    const mockEventsData = [{ name: 'Music Festival', description: 'Annual festival' }];
    axios.get.mockResolvedValue({ data: { events: mockEventsData } });

    const res = await request(app).get('/api/destinations/events').query({ location: 'Paris' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body).toEqual(mockEventsData);
  });
});
