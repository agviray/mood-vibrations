import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [userMood, setUserMood] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3000/analyze-mood', {
      userMood: userMood,
    });
    setUserMood('');
    setRecommendation(response.data.recommendation);
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
            placeholder="Enter your mood..."
          />
          <button type="submit">Submit Mood</button>
        </form>
      </div>
      <div id="recommendation">
        <h2>Recommendation</h2>
        {recommendation ? <p> {recommendation}</p> : null}
      </div>
    </>
  );
};

export default App;
