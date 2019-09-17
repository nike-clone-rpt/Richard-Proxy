const express = require('express');
const request = require('request');
const mayLikeUrl = 'http://you-may-like-dev.us-west-2.elasticbeanstalk.com/shoes';
const imageUrl = 'http://18.207.197.100:1121/api/images';
const reviewsUrl = 'http://productinforeviews-env.ergwvejvxp.us-east-2.elasticbeanstalk.com/api/reviews';

const app = express();
const port = 6969;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + '/../client/'))

app.listen(port, () => {
  console.log(`Proxy server listening on port http://localhost:${port}.`);
})

app.all('/youMayLike', (req, res) => {
  console.log(`Redirecting request to ${mayLikeUrl}.`);
  let options = {
    url: `${mayLikeUrl}`,
    method: req.method,
    qs: req.query
  }
  request(options, (err, response, body) => {
    if (err) {alert(err)};
    //let body = JSON.parse(response.body);
    res.send(body);
  })
})

app.all('/images', (req, res) => {
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

app.all('/reviews', (req, res) => {
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