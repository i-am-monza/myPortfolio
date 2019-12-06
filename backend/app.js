var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var details = require('./src/details.json');
var app = express();
var PORT = process.env.PORT || 3001;
var archive = require('./src/archive.json');
var cors = require('cors');
var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: '{username}',
            clientId: '{Client ID}',
            clientSecret: '{Client Secret}',
            refreshToken: '{refresh-token}',
            accessToken: '{cached access token}'
        })
    }
});
	
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
-
app.use(express.static(path.join(__dirname, '/../projects-frontend/build')));

app.get('/getcv', (req, res, next) => {
	let mailPacket = {
		from: req.query.email,
		to: details.auth.user,
		subject: "CV Request From Portfolio",
		html: "Hi Monza\nA user has requested for your cv.\nEmail address: " + req.queryemail
	}

	transport.sendMail(mailPacket, (info, err) => {
		if(err)
		{
			console.log("Error:", err)
		}
		else
		{
			console.log("Success:", info)
		}
	});
	res.send({archive: "ijdnio"});
});

app.get('/messageBoard/getNotes', (req, res, next) => {
	res.json(archive);
});

app.post('/messageBoard/postNote', (req, res, next) => {
	archive.push(req.body);

	fs.writeFile('./src/archive.json', JSON.stringify(archive), err => {
		if(err)
		{
			throw err;
		}
	});

	res.send(archive);
});

app.post('/messageBoard/postMessage', (req, res, next) => {
	let mailPacket = {
		from: req.body.emailMessage,
		to: details.auth.user,
		subject: "Portfolio Message",
		html: req.body.message + "\n\n" + req.body.date
	}

	transport.sendMail(mailPacket, (info, err) => {
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(info);
		}
	});
});

app.listen(PORT, () => {
    console.warn(`Local server listening on PORT ${PORT}`)
});