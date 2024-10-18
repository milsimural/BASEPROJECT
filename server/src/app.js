const express = require('express');
const morgan = require('morgan');

const themeRouter = require('./routes/themeRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', themeRouter);

module.exports = app;
