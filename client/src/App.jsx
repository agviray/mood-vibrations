import { useState } from 'react';
import UserTextForm from './components/UserTextForm';

const App = () => {
  const [userMood, setUserMood] = useState('');

  const onUserMoodChange = async (determinedMood) => {
    const mood = await determinedMood;
    setUserMood(mood);
  };

  return (
    <>
      <h1>Mood Vibrations</h1>
      <UserTextForm onUserMoodChange={onUserMoodChange} />
      <div id="userMood">
        {userMood ? (
          <>
            <h2>Recommended:</h2>
            <p>{userMood}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default App;
