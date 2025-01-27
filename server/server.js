const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/analyze-mood', (req, res) => {
  const { userMood } = req.body;
  console.log('\n', userMood, '\n');
  // TODO:
  // 1. Analyze userMood.
  // 2. Send response recommendation based on user mood, back to front-end.

  // Sample response
  res.json({ recommendation: 'chill music' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
