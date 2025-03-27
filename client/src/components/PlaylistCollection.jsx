import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchSongsByQuery } from '../api/spotify';
import { StyledPlaylistCollection } from './styles/PlaylistCollection.styled';

const PlaylistCollection = ({ userMood }) => {
  const getSongs = async (query) => {
    const userQuery = query;
    const response = await searchSongsByQuery(userQuery);

    if (response.data && response.data.playlists) {
      /* TODO: Create PlaylistCard component. */
      /* TODO: Render each playlist in a PlaylistCard. */

      console.log(response.data.playlists.items);
    }
  };

  useEffect(() => {
    if (userMood !== '') {
      getSongs(userMood);
    }
  }, [userMood]);

  return userMood ? (
    <StyledPlaylistCollection>
      <div>
        <h3>
          Playlists for feeling <em>{userMood}</em>
        </h3>
        {/* TODO: Display PlaylistCards here. */}
      </div>
    </StyledPlaylistCollection>
  ) : null;
};

PlaylistCollection.propTypes = {
  userMood: PropTypes.string.isRequired,
};

export default PlaylistCollection;
