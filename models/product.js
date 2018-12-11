const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Product {
	constructor(title) {
		this.title = title;
	}

	save() {
		getProductsFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.error("Had this error: ", err);
			})
		});
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}
}

getProductsFromFile = cb => {
	fs.readFile(p, (err, fileContent) => {
		if (err)
		{
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
}