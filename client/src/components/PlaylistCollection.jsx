import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchMusicByQuery } from '../api/spotify';
import PlaylistCard from './PlaylistCard';
import { StyledPlaylistCollection } from './styles/PlaylistCollection.styled';

const PlaylistCollection = ({ userMood }) => {
  const [allPlaylists, setAllPlaylists] = useState([]);

  const getMusic = async (query) => {
    const response = await searchMusicByQuery(query);

    // TODO: Allow user to get either playlists or tracks.
    // TODO: Allow user to search genres (if possible).
    // - Example: search 'chill' songs in the 'drum & bass' genre.
    if (response.data && response.data.playlists) {
      /* TODO: Render each playlist in a PlaylistCard. */
      setAllPlaylists(response.data.playlists.items);
    }
  };

  useEffect(() => {
    if (userMood !== '') {
      getMusic(userMood);
    }
  }, [userMood]);

  const renderPlaylistsCards = (playlists) => {
    return playlists.map((list) =>
      list ? <PlaylistCard key={list.id} list={list} /> : null
    );
  };

  return userMood ? (
    <StyledPlaylistCollection id="playlist-collection">
      <div>
        <h3>
          Playlists for feeling <em>{userMood}</em>
        </h3>
        <div>{renderPlaylistsCards(allPlaylists)}</div>
      </div>
    </StyledPlaylistCollection>
  ) : null;
};

PlaylistCollection.propTypes = {
  userMood: PropTypes.string.isRequired,
};

export default PlaylistCollection;
