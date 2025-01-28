import { useState } from 'react';
import UserTextForm from './components/UserTextForm';

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
      <div id="userMood">
        {moodMessage && userMood ? (
          <>
            <h2>Mood Message:</h2>
            <p>{moodMessage}</p>
            <h2>Mood:</h2>
            <p>{userMood}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default App;
