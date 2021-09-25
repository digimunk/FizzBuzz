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
          action: fizzBuzz.test,
        },
      ],
      errorMapping: {
        NotFound: 404,
        BadRequestError: 400,
        StructError: 400,
        KnownError: 429,
        ServerError: 500,
      },
    },
  })