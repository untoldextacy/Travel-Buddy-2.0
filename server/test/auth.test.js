const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../models/User');  // Import User model

describe('Auth Routes', () => {
  beforeEach(async () => {
    // Clear users before each test to ensure unique data
    await User.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();  // Close connection after all tests
  });

  it('should register a new user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'Test@1234'
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');  // Expects token to be present in the response
  });

  it('should log in an existing user', async () => {
    // First, register the user
    await request(app).post('/api/auth/register').send({
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'Test@1234'
    });

    // Now, log in with the same user
    const res = await request(app).post('/api/auth/login').send({
      email: 'testuser@example.com',
      password: 'Test@1234'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});