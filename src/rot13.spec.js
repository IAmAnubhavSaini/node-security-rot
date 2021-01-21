const rot13 = require('./rot13')

describe('rot13', () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const rotatedLower = 'nopqrstuvwxyzabcdefghijklm'
    const rotatedUpper = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    it('rotates lower characters correctly', () => {
        const actual = rot13(lower)
        const expected = rotatedLower
        expect(actual).toEqual(expected)
    })
    it('double rotation on lower characters nullifies', () => {
        const actual = rot13(rot13(lower))
        const expected = lower
        expect(actual).toEqual(expected)
    })
    it('rotates upper characters correctly', () => {
        const actual = rot13(upper)
        const expected = rotatedUpper
        expect(actual).toEqual(expected)
    })
    it('double rotation on upper characters nullifies', () => {
        const actual = rot13(rot13(upper))
        const expected = upper
        expect(actual).toEqual(expected)
    })
    it('rotates lower+upper correctly', () => {
        const actual = rot13(lower + upper)
        const expected = rotatedLower + rotatedUpper
        expect(actual).toEqual(expected)
    })
    it('rotates upper+lower correctly', () => {
        const actual = rot13(upper + lower)
        const expected = rotatedUpper + rotatedLower
        expect(actual).toEqual(expected)
    })
    it('rotates upper + numbers +lower correctly', () => {
        const actual = rot13(upper + numbers + lower)
        const expected = rotatedUpper + numbers + rotatedLower
        expect(actual).toEqual(expected)
    })
})
