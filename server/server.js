const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()
const cors = require('cors')
const compression = require('compression')
const morgan = require('morgan')
const { name, version, description } = require('./package.json')
const services = require('./src/services')

const port = process.env.PORT || 3001
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use('/*', (err, req, res, next) => {
	console.error('ERROR ', err)
	next()
})

console.info('Application Started ', name, version, description)

services(app)
console.info('Services Started')

app.get('/healthcheck', (req, res) => {
	res.status(200).send({ message: 'healthcheck' })
})

app.get('/', function(req, res) {
	const response = {
		message: 'Hello from Test Server',
		name,
		version,
		description
	}
	res.send(response)
})

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')))
	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
	})
}

// app.listen(port, () => console.log(`Listening on port ${port}`));
app.listen(port, () => {
	console.log(`Resource Server Ready on port ${port}`)
})
module.exports = { app }