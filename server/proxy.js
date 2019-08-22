const express = require('express');
const request = require('request');
const mayLikeUrl = 'http://localhost:1128/shoes';
const imageUrl = 'http://localhost:1121/api/images';
const reviewsUrl = 'http://localhost:3000/api/reviews';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 6969;

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}.`);
})

app.all('youMayLike/*', (req, res) => {
  console.log(`Redirecting request to ${mayLikeUrl}.`);
  let options = {
    url: `${mayLikeUrl}`,
    method: req.method,
    qs: req.query
  }
  request(options, (err, response) => {
    if (err) {alert(err)};
    let body = JSON.parse(response.body);
    res.send(body);
  })
})

app.all('images/*', (req, res) => {
  console.log(`Redirecting request to ${imageUrl}.`);
  let options = {
    url: `${mayLikeUrl}`,
    method: req.method,
    qs: req.query
  }
  request(options, (err, response) => {
    if (err) {alert(err)};
    let body = JSON.parse(response.body);
    res.send(body);
  })
})

app.all('reviews/*', (req, res) => {
  console.log(`Redirecting request to ${reviewsUrl}.`)
  let options = {
    url: `${mayLikeUrl}`,
    method: req.method,
    qs: req.query
  }
  request(options, (err, response) => {
    if (err) {alert(err)};
    let body = JSON.parse(response.body);
    res.send(body);
  })
})