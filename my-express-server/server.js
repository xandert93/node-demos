const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1 style="color:red">Puss Puss</h1>'));

app.get('/contact', (req, res) =>
  res.send('<h3 style="color:blue">Contact me here.</h3>')
);

app.listen(3000, () => console.log('Server started on port 3000.'));
