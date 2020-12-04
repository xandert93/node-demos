const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.post('/', (req, res) => {
  let { num1, num2 } = req.body;
  res.send(`<p>Your answer is ${+num1 + +num2}</p>`);
});

app.get('/bmicalculator', (req, res) =>
  res.sendFile(`${__dirname}/bmiCalculator.html`)
);

app.post('/bmicalculator', (req, res) => {
  let { height, weight } = req.body;
  res.send(`<h3>Your BMI is ${weight / height ** 2}</h3>`);
});

app.listen(3000);
