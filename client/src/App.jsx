import { useState } from 'react';
import axios from 'axios';
import UserTextForm from './components/UserTextForm';
import AiResponse from './components/AIResponse';
import UserQuickOptions from './components/UserQuickOptions';
import { StyledAppContainer } from './components/styles/App.styled.js';

const App = () => {
  const [aiResponse, setAiResponse] = useState({
    moodMessage: '',
    userMood: '',
  });
  const { moodMessage, userMood } = aiResponse;

  const postUserPromptToAnalyze = async (prompt) => {
    const userPrompt = prompt;

    if (userPrompt === '') {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/analyze-mood',
        {
          userPrompt,
        }
      );
      if (response.data && response.data.moodMessage && response.data.mood) {
        onAiResponseChange(response.data);
      }
    } catch (error) {
      console.error('Error analyzing mood:', error);
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
        <UserTextForm onAiResponseChange={onAiResponseChange} />
        {moodMessage && userMood ? (
          <AiResponse moodMessage={moodMessage} userMood={userMood} />
        ) : (
          <UserQuickOptions />
        )}
      </div>
    </StyledAppContainer>
  );
};

export default App;
