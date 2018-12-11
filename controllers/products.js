const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
	res.render('admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product'
	});
}

exports.postAddProduct = (req, res, next) => {
	// const img = "https://fakeimg.pl/350x200/?text=".concat(req.body.title);
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
}

exports.getProducts = (req, res, next) => {
	Product.fetchAll(products => {
		res.render('shop/product-list', {
			products,
			pageTitle: 'Shop',
			path: '/'
		});
	});
}