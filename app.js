const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyparser = require('body-parser');

const app = express();

const postsRoute = require('./routes/posts');

app.use(bodyparser.json());

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
	res.send('we are home');
});

app.get('/posts', (req, res) => {
	res.send('we are on the post');
});

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
	console.log('connected to db!')
);

app.listen(3000);
