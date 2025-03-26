import axios from 'axios';

export const postUserPromptToAnalyze = async (prompt) => {
  const userPrompt = prompt;

  try {
    const response = await axios.post(
      'http://localhost:3000/api/prompt/analyze',
      {
        userPrompt,
      }
    );
    return response;
  } catch (error) {
    console.error('Error analyzing mood:', error);
  }
};
