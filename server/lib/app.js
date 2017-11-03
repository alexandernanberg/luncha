const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const passport = require('passport');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const errorHandlers = require('./helpers/errorHandlers');
require('./helpers/passport');

// Initialize app
const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTTP headers
app.use(helmet({
  noCache: true,
}));

// Enable CORS
app.use(cors());

// Logger
if (app.get('env') !== 'production') {
  app.use(morgan('dev'));
}

// Validator
app.use(expressValidator());

// Passport
app.use(passport.initialize());

// Routes
app.use('/', routes);

// 404
app.use(errorHandlers.notFound);

// Development errors
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

// Production errors
app.use(errorHandlers.productionErrors);

module.exports = app;
