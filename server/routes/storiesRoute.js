const express = require('express');
const router = express.Router();
const Story = require('../models/storyModel');
const { getStories, getStory } = require('../controllers/storiesController');


// returns all stories
router.get('/stories', getStories);

// returns one story
router.get('/stories/:id', getStory);


module.exports = router;