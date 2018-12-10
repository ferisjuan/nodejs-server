const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router()

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
	res.render('add-product', { pageTitle: 'Add Product' });
});

//Can use the /add-product on both routes since the method is direferent, it will yield a direferent route
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title })
	res.redirect('/');
});

exports.routes = router;
exports.products = products