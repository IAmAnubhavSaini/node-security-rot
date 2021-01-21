const rot13 = require('./rot13')

describe('rot13', () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const rotatedLower = 'nopqrstuvwxyzabcdefghijklm'
    it('rotates correctly', () => {
        const actual = rot13(lower)
        const expected = rotatedLower
        expect(actual).toEqual(expected)
    })
    it('double rotation nullifies', () => {
        const actual = rot13(rot13(lower))
        const expected = lower
        expect(actual).toEqual(expected)
    })
})
