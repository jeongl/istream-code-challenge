const express = require('express')
const app = express()
const request = require('request');

const URL = '/danielgtaylor-gmail-com/isp-sales/summary';

app.get(URL, (req, res) => {
  request.get(`https://hook.io${URL}`, (req, response) => {
    res.send(response.body);
  });
});

app.listen(3016, () => console.log('App running on port 3016'));
