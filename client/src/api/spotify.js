import axios from 'axios';

export const searchSongsByQuery = async (query) => {
  const userQuery = query;

  try {
    const response = await axios.get(
      'http://localhost:3000/api/spotify/search',
      {
        params: {
          query: userQuery,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Error searching Spotify:', error);
  }
};
