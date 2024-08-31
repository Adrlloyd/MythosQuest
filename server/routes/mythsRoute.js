const express = require('express');
const router = express.Router();
const Story = require('../models/mythModel');
const { getMyths, getMyth } = require('../controllers/mythsController');


// returns all myths
router.get('/myths', getMyths);

// returns one story
router.get('/myths/:id', getMyth);


module.exports = router;