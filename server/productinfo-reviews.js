const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded());

const port = 3000;

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}.`);
})

module.exports = `http://localhost:${port}/`