const axios = require('axios');
const { getSpotifyToken } = require('../../config/spotify');
require('dotenv').config();

const searchSpotify = async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const { query, type = 'playlist' } = req.query;

    if (!token) {
      return res.status(500).json({ error: 'Error getting Spotify token' });
    }

    if (!query) {
      return res
        .status(400)
        .json({ error: 'Missing required query parameter' });
    }

    const response = await axios.get(process.env.SPOTIFY_SEARCH_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type,
        limit: 15,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error searching Spotify:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { searchSpotify };
