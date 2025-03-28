import Proptypes from 'prop-types';
import { StyledPlaylistCard } from './styles/PlaylistCard.styled';

const PlaylistCard = ({ list }) => {
  return list ? (
    <StyledPlaylistCard id="playlist-card">
      <div>
        <div>
          <span>
            <img src={list.images[0].url} alt="Playlist Image" />
          </span>
        </div>
        <div>
          <h4>{list.name}</h4>
          <p>{list.description}</p>
          <a href={list.external_urls.spotify} target="_blank">
            <span className="playlist-link">Go to Playlist</span>
          </a>
        </div>
      </div>
    </StyledPlaylistCard>
  ) : null;
};

PlaylistCard.propTypes = {
  list: Proptypes.object.isRequired,
};

export default PlaylistCard;
