const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  let { city } = req.body;
  let apiKey = '5fe6094b446d63fadc8b1a3221831c4a';
  let baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  https.get(baseURL, (response) => {
    response.on('data', (data) => {
      let weatherData = JSON.parse(data);
      if (weatherData.cod !== '404') {
        let icon = weatherData.weather[0].icon;
        let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        res.write(
          `<h1>The temperature in ${city} is ${weatherData.main.temp}degs</h1>`
        );
        res.write(`<img src="${iconURL}">`);
        res.send();
      } else res.send(`<h3>${weatherData.message}</h3>`);
    });
  });
});

app.listen(3000);
