import { useState } from 'react';
import UserTextForm from './components/UserTextForm';
import AiResponse from './components/AIResponse';

const App = () => {
  const [moodMessage, setMoodMessage] = useState('');
  const [userMood, setUserMood] = useState('');

  const onMoodMessageChange = (moodMessage) => {
    const message = moodMessage;
    setMoodMessage(message);
  };
  const onUserMoodChange = (determinedMood) => {
    const mood = determinedMood;
    setUserMood(mood);
  };

  return (
    <>
      <h1>Mood Vibrations</h1>
      <UserTextForm
        onMoodMessageChange={onMoodMessageChange}
        onUserMoodChange={onUserMoodChange}
      />
      {moodMessage && userMood ? (
        <AiResponse moodMessage={moodMessage} userMood={userMood} />
      ) : null}
    </>
  );
};

export default App;
