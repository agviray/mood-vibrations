const express = require('express');
const cors = require('cors');
require('dotenv').config();
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/analyze-mood', async (req, res) => {
  const { userText } = req.body;
  try {
    const response = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: `The user will provide some text to you. Analyze the text to determine the user's overall emotional state. Consider factors such as word choice, sentence structure, and sentiment expressed. Respond by acknowledging the user's possible mood that you determined, without repeating their text, in a mimimum of one to a maximum of two complete sentences. The last sentence must be a grammatically complete sentence. Don't refer to the user as "the user" or "they." Instead, refer to the user as "you." Don't say things like "According to your text" or "Based on your text...". Sound more human rather than robotic. Here is the text to analyze: "${userText}"`,
      max_tokens: 50,
    });
    const mood = response.choices[0].text.trim();
    res.json({ mood });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
