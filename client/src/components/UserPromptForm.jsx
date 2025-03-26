import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledUserPromptForm } from './styles/UserPromptForm.styled.js';

const UserPromptForm = ({ postPrompt }) => {
  const [userText, setUserText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userText === '') {
      return;
    }
    postPrompt(userText);
  };

  return (
    <>
      <StyledUserPromptForm onSubmit={handleSubmit}>
        <textarea
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
          placeholder="Describe your mood or feelings..."
          rows={1}
          cols={30}
          maxLength={100}
        ></textarea>
        <button type="submit">Submit</button>
      </StyledUserPromptForm>
    </>
  );
};

UserPromptForm.propTypes = {
  postPrompt: PropTypes.func.isRequired,
};

export default UserPromptForm;
