const fizzBuzz = require('../../services/fizzBuzzService')

describe('getResult calculates values', () => {
    it('Returns Invalid Item for text', () => {
        const results = fizzBuzz.getResult('zuckledorf')

        expect(results.result).toBe('Invalid Item')
        expect(results.log.length).toBe(0)
    })

    it('Returns Invalid Item for empty string', () => {
        const results = fizzBuzz.getResult('')

        expect(results.result).toBe('Invalid Item')
        expect(results.log.length).toBe(0)
    })

    it('Returns Invalid Item for undefined', () => {
        const results = fizzBuzz.getResult()

        expect(results.result).toBe('Invalid Item')
        expect(results.log.length).toBe(0)
    })

    it('Returns Invalid Item for whitespace', () => {
        const results = fizzBuzz.getResult(' ')

        expect(results.result).toBe('Invalid Item')
        expect(results.log.length).toBe(0)
    })

    it('Returns valid output for dividing by 1', () => {
        const results = fizzBuzz.getResult(1)

        expect(results.result).toBe('Divided 1 by 3,Divided 1 by 5')
        expect(results.log.length).toBe(2)
        expect(results.log[0]).toBe('Divided 1 by 3')
        expect(results.log[1]).toBe('Divided 1 by 5')
    })

    it('Returns valid output for dividing by 3', () => {
        const results = fizzBuzz.getResult(3)

        expect(results.result).toBe('Fizz')
        expect(results.log.length).toBe(2)
        expect(results.log[0]).toBe('Divided 3 by 3')
        expect(results.log[1]).toBe('Divided 3 by 5')
    })

    it('Returns valid output for dividing by 5', () => {
        const results = fizzBuzz.getResult(5)

        expect(results.result).toBe('Buzz')
        expect(results.log.length).toBe(2)
        expect(results.log[0]).toBe('Divided 5 by 3')
        expect(results.log[1]).toBe('Divided 5 by 5')
    })

    it('Returns valid output for dividing by 15', () => {
        const results = fizzBuzz.getResult(15)

        expect(results.result).toBe('FizzBuzz')
        expect(results.log.length).toBe(2)
        expect(results.log[0]).toBe('Divided 15 by 3')
        expect(results.log[1]).toBe('Divided 15 by 5')
    })

    it('Returns Invalid Item for dividing by A', () => {
        const results = fizzBuzz.getResult('A')

        expect(results.result).toBe('Invalid Item')
        expect(results.log.length).toBe(0)
    })

    it('Returns valid output for dividing by 23', () => {
        const results = fizzBuzz.getResult(23)

        expect(results.result).toBe('Divided 23 by 3,Divided 23 by 5')
        expect(results.log.length).toBe(2)
        expect(results.log[0]).toBe('Divided 23 by 3')
        expect(results.log[1]).toBe('Divided 23 by 5')
    })
})

describe('findValues returns proper response given inputs', () => {
    it('Returns valid output', () => {
        const event = {body: [1,3,5,null,15,'A',23] }
        const response = fizzBuzz.findValues(event)

        expect(response.results.length).toBe(7)
        expect(response.log.length).toBe(5)
    })
})