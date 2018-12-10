// express
const express = require('express');
const router = express.Router()

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

//Can use the /add-product on both routes since the method is direferent, it will yield a direferent route
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	const img = "https://fakeimg.pl/350x200/?text=".concat(req.body.title);
	products.push({ img, title: req.body.title })
	res.redirect('/');
});

exports.routes = router;
exports.products = products