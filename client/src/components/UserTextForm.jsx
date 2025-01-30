import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { StyledUserTextForm } from './styles/UserTextForm.styled.js';

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
      <StyledUserTextForm onSubmit={handleSubmit}>
        <textarea
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
          placeholder="Describe your mood or feelings..."
          rows={1}
          cols={30}
          maxLength={100}
        ></textarea>
        <button type="submit">Submit</button>
      </StyledUserTextForm>
    </>
  );
};

UserInputForm.propTypes = {
  onAiResponseChange: PropTypes.func.isRequired,
};

export default UserInputForm;
