const greetModule = require ('../../build/Release/greet.node')

const route = router => {
  console.info('napiService')
  console.info('exports: ', greetModule);
	router.get('/', (req, res, next) => {
		res.status(200).send({ message: greetModule.greetHello() })
	})
}

module.exports = route