const axios = require('axios');
const { getWeather } = require('../services/apiService');  // Import getWeather from apiService
jest.mock('axios');  // Mock axios

describe('getWeather', () => {
  it('should fetch weather data successfully', async () => {
    const mockWeatherData = { main: { temp: 25 }, weather: [{ description: 'sunny' }] };
    
    // Mock axios response for weather API
    axios.get.mockResolvedValue({ data: mockWeatherData });

    // Call getWeather with sample coordinates
    const weather = await getWeather(48.8584, 2.2945);
    
    // Assert that the returned data matches mock data
    expect(weather).toEqual(mockWeatherData);
  });
});
