const route = router => {
	console.info('pingService')
	router.get('/', (req, res, next) => {
		res.status(200).send({ message: 'healthcheck' })
	})
}

module.exports = route