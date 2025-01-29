import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const UserInputForm = ({ onAiResponseChange }) => {
  const [userText, setUserText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userText === '') {
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:3000/api/analyze-mood',
        {
          userText,
        }
      );
      setUserText('');
      if (response.data && response.data.moodMessage && response.data.mood) {
        onAiResponseChange(response.data);
      }
    } catch (error) {
      console.error('Error analyzing mood:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
          placeholder="Describe your mood or feelings..."
          rows={1}
          cols={30}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

UserInputForm.propTypes = {
  onAiResponseChange: PropTypes.func.isRequired,
};

export default UserInputForm;
