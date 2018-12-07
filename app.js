const express = require('express');
const app = express();

app.use((req, res, next) => {
	console.log('I`m the middleware!!');
	next();
});

app.use((req, res, next) => {
	console.log('I`m the other middleware!!');
	res.send('<h1>Hello!!!</h1>');
});

app.listen(3000)

console.log('Listening at port 3000');