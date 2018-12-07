const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.setHeader('Content-type', 'text/html')
		res.write('<html><head><title>Assigment-01</title></head>')
		res.write('<body><h1>Hello!! Welcome to my home page!!</h1>')
		res.write(
			'<form action="/create-user" method="POST"><input type="text" name="create-user"/>'
		)
		res.write(
			'<button type="submit">Create</button></form>'
		)
		res.write('</body></html>')
		return res.end()
	}
	if (url === '/users') {
		res.setHeader('Content-type', 'text/html')
		res.write('<html><head><title>Assigment-01/users</title></head>')
		res.write(
			'<body><h1>Here are some users</h1><ul><li>Juan</li><li>Carlos</li><li>Mayi</li></ul></body></html>'
		)
		return res.end()
	}
	if (url === '/create-user' && method === 'POST') {
		const body = []

		req.on('data', chunk => {
			body.push(chunk)
		})
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString()
			const user = parsedBody.split("=")[1]
			console.log(user);
			res.setHeader('Content-type', 'text/html')
			res.write('<html><head><title>Assigment-01</title></head>')
			res.write(`<body><h1>Hello!! ${user}, Welcome to my home page!!</h1>`)
			res.write('</body></html>')
			return res.end()
		})
	}
}

module.exports = {
	handler: requestHandler,
};