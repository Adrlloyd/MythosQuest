const Myth = require('../models/mythModel');

const getMyths = async (req, res) => {
  const result = await Myth.find()
  res.send({'myths': result})
};

const getMyth = async (req, res) => {
  const {id} = req.params
  const result = await Myth.findById(id)
  res.send(result)
};

module.exports = {getMyths, getMyth};