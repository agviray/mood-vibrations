import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UserInputForm = ({ onUserMoodChange }) => {
  const [userText, setUserText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/analyze-mood',
        {
          userText,
        }
      );
      setUserText('');
      if (response.data && response.data.mood) {
        onUserMoodChange(response.data.mood);
      }
    } catch (error) {
      console.error('Error analyzing mood:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
          placeholder="Describe your mood or feelings..."
          rows={10}
          cols={30}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

UserInputForm.propTypes = {
  onUserMoodChange: PropTypes.func.isRequired,
};

export default UserInputForm;
