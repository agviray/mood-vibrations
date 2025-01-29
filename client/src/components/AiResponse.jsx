import PropTypes from 'prop-types';

const AiResponse = ({ moodMessage, userMood }) => {
  return (
    <div id="ai-response">
      <h3>AI Message</h3>
      <p>{moodMessage}</p>
      <h3>Your Mood</h3>
      <p>{userMood}</p>
    </div>
  );
};

AiResponse.propTypes = {
  moodMessage: PropTypes.string.isRequired,
  userMood: PropTypes.string.isRequired,
};

export default AiResponse;
