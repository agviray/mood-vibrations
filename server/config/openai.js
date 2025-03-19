const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const analyze = async (text) => {
  try {
    const firstResponse = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: `The user will provide some text to you. Analyze the text to determine the user's overall emotional state. Consider factors such as word choice, sentence structure, and sentiment expressed. Respond by acknowledging the user's possible mood that you determined, without repeating their text, in a mimimum of one to a maximum of two complete sentences. The last sentence must be a grammatically complete sentence. Don't refer to the user as "the user" or "they." Instead, refer to the user as "you." Do not include the basis of your analysis or determination. For example, do not say things like "According to your text" or "Based on your text...". Sound more human rather than robotic. Here is the text to analyze: "${text}"`,
      max_tokens: 50,
    });

    const moodMessage = firstResponse.choices[0].text.trim();

    const secondResponse = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: `I will provide some text to you. Analyze the text to determine an overall emotional state. Respond in a single word that describes the mood that the text conveys. The text is: "${text}"`,
      max_tokens: 40,
    });

    const mood = secondResponse.choices[0].text.trim();

    return { moodMessage, mood };
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  analyze,
};
