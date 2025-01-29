import { useState } from 'react';
import UserTextForm from './components/UserTextForm';
import AiResponse from './components/AIResponse';
import { StyledAppContainer } from './components/styles/App.styled';

const App = () => {
  const [aiResponse, setAiResponse] = useState({
    moodMessage: '',
    userMood: '',
  });
  const { moodMessage, userMood } = aiResponse;

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
        ) : null}
      </div>
    </StyledAppContainer>
  );
};

export default App;
