const router = require('aws-lambda-router')
const fizzBuzz = require('./services/fizzBuzzService')

exports.handler = router.handler({
    proxyIntegration: {
      cors: false,
      onError: (error, request, context) => {
        console.error('Error', error, request, context)
      },
      routes: [
        {
          path: '/fizzbuzz',
          method: 'POST',
          action: fizzBuzz.findValues,
        },
      ],
    },
  })