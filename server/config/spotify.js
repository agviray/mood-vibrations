const axios = require('axios');
require('dotenv').config();

const getSpotifyToken = async () => {
  try {
    const response = await axios.post(
      process.env.SPOTIFY_TOKEN_URL,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Spotify token:', error);
    return null;
  }
};

module.exports = { getSpotifyToken };
