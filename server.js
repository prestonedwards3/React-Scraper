const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 8000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYT-Scraper";
// Connect to the Mongo DB

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(port, () => console.log(`Listening on port ${port}`));