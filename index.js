const express = require('express');

const app = express();
app.listen('/', (req, res) => {
  res.send('hello');
});

app.listen(3000);
