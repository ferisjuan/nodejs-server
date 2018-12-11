const products = [];

exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product'
	});
}

exports.postAddProduct = (req, res, next) => {
	const img = "https://fakeimg.pl/350x200/?text=".concat(req.body.title);
	products.push({ img, title: req.body.title })
	res.redirect('/');
}

exports.getProducts = (req, res, next) => {
	res.render('shop', {
		products,
		pageTitle: 'Shop',
		path: '/'
	});
}