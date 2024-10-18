const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cors = require('cors');

const themeRouter = require('./routes/themeRouter');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', themeRouter);

module.exports = app;
