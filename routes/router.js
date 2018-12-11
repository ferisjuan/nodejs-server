const prettyjson = require('prettyjson');
const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
	res.render('root');
})

router.post('/users', (req, res, next) => {
	users.push({ user: req.body.user })
	res.redirect('/users')
})

router.get('/users', (req, res, next) => {
	res.render('users', { users });
})

router.get('*', (req, res, next) => {
	res.render('404')
})

module.exports = router;