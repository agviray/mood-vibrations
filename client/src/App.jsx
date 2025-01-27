import { useState } from 'react';
import UserInputForm from './components/UserMoodForm';

const App = () => {
  const [recommendation, setRecommendation] = useState('');

  const onRecommendationChange = (recommended) => {
    setRecommendation(recommended);
  };

  return (
    <>
      <h1>Mood Vibrations</h1>
      <UserInputForm onRecommendationChange={onRecommendationChange} />
      <div id="recommendation">
        {recommendation ? (
          <>
            <h2>Recommended:</h2>
            <p>{recommendation}</p>
          </>
        ) : null}
      </div>
    </>
  );
};

export default App;
