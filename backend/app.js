var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getcv', (req, res, next) => {
	console.log("Now getting CV");
	res.json("In server");
});

app.listen(PORT, () => {
    console.warn(`Local server listening on PORT ${PORT}`)
});