const express = require('express');

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	res.send(
		'<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add product</button></form>'
	);
});

//Can use the /add-product on both routes since the method is direferent, it will yield a direferent route
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;