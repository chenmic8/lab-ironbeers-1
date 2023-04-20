const express = require('express');

const hbs = require('hbs');
const path = require('path');
var indexRouter = require('./routes/index.js');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

// const userRoutes = require('/routes/index.js');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(__dirname + '/views/partials');

app.use('/', indexRouter);

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:
// app.use('/user', userRoutes);



app.listen(3000, () => console.log('🏃‍ on port 3000'));
