import { useState } from 'react';
import UserTextForm from './components/UserTextForm';
import AiResponse from './components/AIResponse';

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
    <>
      <h1>Mood Vibrations</h1>
      <UserTextForm onAiResponseChange={onAiResponseChange} />
      {moodMessage && userMood ? (
        <AiResponse moodMessage={moodMessage} userMood={userMood} />
      ) : null}
    </>
  );
};

export default App;
