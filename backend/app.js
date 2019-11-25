var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var app = express();
var PORT = process.env.PORT || 3001;
var archive = require('./src/archive.json');
var cors = require('cors');
	
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getcv', (req, res, next) => {
	console.log("Now getting CV");
	res.json("In server");
});

app.post('/messageBoard/postNote', (req, res, next) => {
	console.log("Server posting notes.", req.body)

	archive.push(req.body);

	fs.writeFile('./src/archive.json', JSON.stringify(archive), err => {
		if(err)
		{
			throw err;
		}
	});

	res.send(archive);
});

app.listen(PORT, () => {
    console.warn(`Local server listening on PORT ${PORT}`)
});