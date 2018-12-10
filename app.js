// Node modules
const express = require('express');
const path = require('path');

// App definition
const app = express();

// local modules
const home = require('./routes/home');
const users = require('./routes/users');

// get body parser
app.use(express.static(path.join(__dirname, 'public')));

// get routes
app.use('/', home);
app.use('/users', users);

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// set listener
app.listen(3000)
console.log('Listening at port 3000');