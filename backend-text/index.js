
const express = require('express');
const cors = require('cors');
const Log = require('../logging-middleware'); 
const requestLogger = require('./middleware/requestLogger');

const app = express();
app.use(express.json());
app.use(cors());
app.use(requestLogger); // Log every request

app.get('/', (req, res) => {
  res.json({ message: 'Backend running with logging!' });
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});