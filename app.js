const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
	console.log('This is the users route');
	res.send('<h1>Hi, it`s nice to have you here</h1>');
});

app.use('/', (req, res, next) => {
	console.log('This is the home route');
	res.send('<h1>Hello, this is the home page!!!</h1>');
});

app.listen(3000)

console.log('Listening at port 3000');