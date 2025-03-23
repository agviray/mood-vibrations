const express = require('express');
const cors = require('cors');
require('dotenv').config();
const promptRoutes = require('./routes/api/prompt');
const spotifyRoutes = require('./routes/api/spotify');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/prompt', promptRoutes);
app.use('/api/spotify', spotifyRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
