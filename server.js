var port = 1337,
	express = require('./config/express'),
	app = express();

app.listen(port);
module.exports = app;
console.log('Server running at http://localhost:' + port);