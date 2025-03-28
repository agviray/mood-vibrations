import Proptypes from 'prop-types';

const PlaylistCard = ({ list }) => {
  return list ? (
    <div className="StyledPlaylistCard">
      <img src={list.images[0].url} alt="Playlist Image" />
      <h4>{list.name}</h4>
      <p>{list.description}</p>
      <a href={list.external_urls.spotify} target="_blank">
        <span className="playlist-link">Go to Playlist</span>
      </a>
    </div>
  ) : null;
};

PlaylistCard.propTypes = {
  list: Proptypes.object.isRequired,
};

export default PlaylistCard;
