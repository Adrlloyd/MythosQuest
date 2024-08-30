const Story = require('../models/storyModel');

const getStories = async (req, res) => {
  const result = await Story.find()
  res.send({'stories': result})
};

const getStory = async (req, res) => {
  const {id} = req.params
  const result = await Story.findById(id)
  res.send(result)
};

module.exports = {getStories, getStory};