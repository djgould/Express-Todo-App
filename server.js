'use strict';

var port = 1337,
	mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose();

var app = express();

app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);