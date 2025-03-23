const express = require('express');
const router = express.Router();
const spotifyCtrl = require('../../controllers/api/spotify');

router.get('/search', spotifyCtrl.searchSpotify);

module.exports = router;
