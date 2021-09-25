const isEmptyOrWhitespace = (str) => {
    return str === null || str === '' || (/^\s*$/).test(str)
}

const getResult = (input) => {
    const returnValue = {
        result: '',
        log: []
    }

    if(isEmptyOrWhitespace(input) || isNaN(input)) {
        returnValue.result = 'Invalid Item'
    }
    else {
        const isDivisibleBy3 = input % 3 == 0
        returnValue.log.push(`Divided ${input} by 3`)

        const isDivisibleBy5 = input % 5 == 0
        returnValue.log.push(`Divided ${input} by 5`)

        if(isDivisibleBy3) {
            returnValue.result = 'Fizz'
        }

        if(isDivisibleBy5) {
            returnValue.result = `${returnValue.result}Buzz`
        }

        if(!isDivisibleBy3 && !isDivisibleBy5) {
            returnValue.result = returnValue.log.join()
        }
    }

    return returnValue
}

const findValues = (event) => {
    const inputs = event.body
    const returnValue = {
        results: [],
        log: []
    }

    inputs.forEach(input => {
        const resolved = getResult(input)
        returnValue.results.push(resolved.result)

        if(resolved.log.length > 0) {
            returnValue.log.push(resolved.log)
        }
    })

    return returnValue
}

module.exports = {
    getResult,
    findValues,
}