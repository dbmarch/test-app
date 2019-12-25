const express = require('express')

const services = app => {
	const addRoute = (path, route) => {
		const subRouter = express.Router()
		route(subRouter)
		app.use(path, subRouter)
	}
	addRoute('/ping', require('./pingService'))
	
	addRoute('/hello', router =>
		router.get('/', (req, res, next) => res.status(200).send({ message: 'Hello from Express' }))
	)

	addRoute('/cpp', require('./napiService'))
	

}

module.exports = services