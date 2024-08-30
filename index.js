require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
module.exports = app;

const PORT = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})