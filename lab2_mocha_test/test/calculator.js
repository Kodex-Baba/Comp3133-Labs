const assert = require('assert');
const Calculator = require('../app/calculator');

describe('Validating Calculator functions', () => {

    it('add(5, 2) expected result 7 PASS', () => {
        assert.equal(Calculator.add(5, 2), 7)
    })

    it('add(5, 2) expected result 7 PASS', () => {
        assert.equal(Calculator.add(5, 2), 8)
    })

    it('add(5, 2) expected result 3 PASS', () => {
        assert.equal(Calculator.sub(5,2), 3)
    })

    it('add(5, 2) expected result 5 FAIL', () => {
        assert.equal(Calculator.sub(5,2), 5)
    })

    it('add(5, 2) expected result 10 PASS', () => {
        assert.equal(Calculator.mul(5,2), 10)
    })

    it('add(5, 2) expected result 3 FAIL', () => {
        assert.equal(Calculator.mul(5,2), 12)
    })

    it('add(10, 2) expected result 5 PASS', () => {
        assert.equal(Calculator.div(10,2), 5)
    })

    it('add(10, 2) expected result 2 FAIL', () => {
        assert.equal(Calculator.div(10,2), 2)
    })
})