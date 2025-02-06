const assert = require('assert')
const Arithmetic = require('../Arithmetic')

describe('Validating Arithmetic functions', () => {
    it('should return 9 when the value is 3', () => {
        assert.equal(Arithmetic.square(3), 9)
    })
    it('should return 144 when the value is 12', () => {
        assert.equal(Arithmetic.square(12), 144)
    })

    it('should return 20 when the value is 20 and 100', () => {
        assert.equal(Arithmetic.percentage(20, 100), 20)
    })
    it('should return 50 when the value is 17 and 34', () => {
        assert.equal(Arithmetic.percentage(17, 34), 50)
    })
})