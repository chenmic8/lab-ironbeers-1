var express = require('express');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
var router = express.Router();
//get beers from api
const punkAPI = new PunkAPIWrapper();

router.get('/', (req, res) => {
  res.render('index.hbs');
});

router.get('/beers', (req, res) => {
  punkAPI.getBeers().then(beers => {
    res.render('beers.hbs', { beers });
  });
});

router.get('/random-beer', (req, res) => {
  punkAPI.getRandom().then(beer => {
    res.render('random-beer.hbs', { beer });
  });
});

module.exports = router;
