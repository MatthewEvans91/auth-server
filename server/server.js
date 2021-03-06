//environment variables
require('dotenv').config();

//create the server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');

//config
app.use(bodyParser.json());
app.use(cors());

//database connection
const database = require('./database');

//access the news
app.use('/auth', require('./auth'));

//error on access
app.get('*', (req, res) => {
	res.redirect('https://github.com/krgamestudios/auth-server');
});

//startup
server.listen(process.env.WEB_PORT || 3200, async (err) => {
	await database.sync();
	console.log(`listening to localhost:${process.env.WEB_PORT || 3200}`);
});
