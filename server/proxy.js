const express = require('express');
const mayLikeUrl = require('./you-may-like.js');
const imageUrl = require('./canvas.js');
const reviewsUrl = require('./productinfo-reviews.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 6969;

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}.`);
})

app.all('youMayLike/*', (req, res) => {

})

app.all(`${imageUrl}/*`, (req, res) => {

})

app.all(`${reviewsUrl}/*`, (req, res) => {

})