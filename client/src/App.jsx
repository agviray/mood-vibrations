import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [userMood, setUserMood] = useState('');

  useEffect(() => {
    testFrontAndBackEnd();
  }, []);

  const testFrontAndBackEnd = async () => {
    const response = await axios.get('http://localhost:3000/');
    console.log(response.data.greeting);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Mood Vibrations</h1>
      <div id="user-input">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userMood}
            onChange={(event) => setUserMood(event.target.value)}
          />
          <button type="submit">Submit Mood</button>
        </form>
      </div>
      <div id="recommendation">
        {/* Display music/sound recommendation here */}
      </div>
    </>
  );
};

export default App;
