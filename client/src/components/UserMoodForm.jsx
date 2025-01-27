import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UserInputForm = ({ onRecommendationChange }) => {
  const [userMood, setUserMood] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3000/analyze-mood', {
      userMood: userMood,
    });
    setUserMood('');
    onRecommendationChange(response.data.recommendation);
  };

  return (
    <div id="user-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userMood}
          onChange={(event) => setUserMood(event.target.value)}
          placeholder="Enter your mood..."
        />
        <button type="submit">Submit Mood</button>
      </form>
    </div>
  );
};

UserInputForm.propTypes = {
  onRecommendationChange: PropTypes.func.isRequired,
};

export default UserInputForm;
