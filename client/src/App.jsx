import { useState } from 'react';
import { postUserPromptToAnalyze } from './api/openai.js';
import UserPromptForm from './components/UserPromptForm.jsx';
import AiResponse from './components/AIResponse';
import UserQuickOptions from './components/UserQuickOptions';
import { StyledAppContainer } from './components/styles/App.styled.js';

const App = () => {
  const [aiResponse, setAiResponse] = useState({
    moodMessage: '',
    userMood: '',
  });
  const { moodMessage, userMood } = aiResponse;

  const postPrompt = async (prompt) => {
    const userPrompt = prompt;

    if (userPrompt === '') {
      return;
    }

    const response = await postUserPromptToAnalyze(prompt);
    if (response.data && response.data.moodMessage && response.data.mood) {
      onAiResponseChange(response.data);
    }
  };

  const onAiResponseChange = (aiResponseDetails) => {
    const { moodMessage, mood } = aiResponseDetails;

    setAiResponse({
      moodMessage: moodMessage,
      userMood: mood,
    });
  };

  return (
    <StyledAppContainer>
      <div>
        <h1>Mood Vibrations</h1>
        <UserPromptForm postPrompt={postPrompt} />
        {moodMessage && userMood ? (
          <AiResponse moodMessage={moodMessage} userMood={userMood} />
        ) : (
          <UserQuickOptions postPrompt={postPrompt} />
        )}
      </div>
    </StyledAppContainer>
  );
};

export default App;
