
const app = require('../../app.js')

const event = {
    "body": JSON.stringify([1,3,5,'',15,'A',23]),
    "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Length": "20",
        "Content-Type": "application/json",
        "Host": "127.0.0.1:3000",
        "Postman-Token": "1e16f21f-8fb1-44aa-97ae-01b2a6923bf2",
        "User-Agent": "PostmanRuntime/7.28.4",
        "X-Forwarded-Port": "3000",
        "X-Forwarded-Proto": "http"
    },
    "httpMethod": "POST",
    "isBase64Encoded": false,
    "multiValueHeaders": {
        "Accept": [
            "*/*"
        ],
        "Accept-Encoding": [
            "gzip, deflate, br"
        ],
        "Cache-Control": [
            "no-cache"
        ],
        "Connection": [
            "keep-alive"
        ],
        "Content-Length": [
            "20"
        ],
        "Content-Type": [
            "application/json"
        ],
        "Host": [
            "127.0.0.1:3000"
        ],
        "Postman-Token": [
            "1e16f21f-8fb1-44aa-97ae-01b2a6923bf2"
        ],
        "User-Agent": [
            "PostmanRuntime/7.28.4"
        ],
        "X-Forwarded-Port": [
            "3000"
        ],
        "X-Forwarded-Proto": [
            "http"
        ]
    },
    "multiValueQueryStringParameters": null,
    "path": "/fizzbuzz",
    "pathParameters": {
        "proxy": "fizzbuzz"
    },
    "queryStringParameters": null,
    "requestContext": {
        "accountId": "123456789012",
        "apiId": "1234567890",
        "domainName": "127.0.0.1:3000",
        "extendedRequestId": null,
        "httpMethod": "POST",
        "identity": {
            "accountId": null,
            "apiKey": null,
            "caller": null,
            "cognitoAuthenticationProvider": null,
            "cognitoAuthenticationType": null,
            "cognitoIdentityPoolId": null,
            "sourceIp": "127.0.0.1",
            "user": null,
            "userAgent": "Custom User Agent String",
            "userArn": null
        },
        "path": "/{proxy+}",
        "protocol": "HTTP/1.1",
        "requestId": "261448aa-4908-462d-8a05-ecba39c4fb15",
        "requestTime": "25/Sep/2021:14:57:49 +0000",
        "requestTimeEpoch": 1632581869,
        "resourceId": "123456",
        "resourcePath": "/{proxy+}",
        "stage": "Prod"
    },
    "resource": "/{proxy+}",
    "stageVariables": null,
    "version": "1.0"
}

const context = null

describe('Tests handler', function () {
    it('Successful response', async () => {
        const result = await app.handler(event, context)

        expect(result).toBeTruthy()
        expect(result.statusCode).toBe(200)

        const body = JSON.parse(result.body)
        expect(body).toBeTruthy()
        expect(body.results.length).toBe(7)
        expect(body.log.length).toBe(5)
    });
});
