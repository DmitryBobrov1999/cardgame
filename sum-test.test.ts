const { sum } = require('./src/index')

describe('test of sum', () => {
    it('should be sum', () => {
        expect(sum(1, 2)).toBe(3)
    })
})
