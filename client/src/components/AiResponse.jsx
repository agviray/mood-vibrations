import PropTypes from 'prop-types';
import { StyledAiResponse } from './styles/AiResponse.styled';

const AiResponse = ({ moodMessage, userMood }) => {
  return (
    <StyledAiResponse id="api-response">
      <div>
        <h3>AI Message</h3>
        <p>{moodMessage}</p>
      </div>
      <div>
        <h3>Your Mood</h3>
        <p>{userMood}</p>
      </div>
    </StyledAiResponse>
  );
};

AiResponse.propTypes = {
  moodMessage: PropTypes.string.isRequired,
  userMood: PropTypes.string.isRequired,
};

export default AiResponse;
