const { analyze } = require('../../config/openai');

const analyzeMood = async (req, res) => {
  const { userPrompt } = req.body;

  try {
    const { moodMessage, mood } = await analyze(userPrompt);
    res.json({ moodMessage, mood });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  analyzeMood,
};
