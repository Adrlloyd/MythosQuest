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

app.get('/', (req, res) => {
  res.send('homepage')
})

const mythsRoute = require('./routes/mythsRoute');
app.use('/', mythsRoute)

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})