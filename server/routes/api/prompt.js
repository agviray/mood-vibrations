const express = require('express');
const router = express.Router();
const promptCtrl = require('../../controllers/api/prompt');

router.post('/analyze', promptCtrl.analyze);

module.exports = router;
