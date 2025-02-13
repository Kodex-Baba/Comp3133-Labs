const assert = require('assert');
const Arithmetic = require('../Arithmetic');

describe('Validating Arithmetic functions', () => {

    it('should return 9 when value is 3', () => {
       assert.equal(Arithmetic.square(3), 9)
    })

    it('should return 144 when value is 12', () => {
        assert.equal(Arithmetic.square(12), 144)
    })

    it('should return 17 when value is (17, 34)', () => {
        assert.equal(Arithmetic.percentage(17, 34), 50)
    })

    it('should return 20 when value is (20, 100)', () => {
        assert.equal(Arithmetic.percentage(20, 100), 20)
    })
})