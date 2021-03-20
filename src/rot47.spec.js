const rot47 = require('./rot47');

describe('rot47', () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const rotatedLower = '23456789:;<=>?@ABCDEFGHIJK';
    it('rotates correctly', () => {
        const actual = rot47(lower);
        const expected = rotatedLower;
        expect(actual).toEqual(expected);
    });
    it('double rotation nullifies', () => {
        const actual = rot47(rot47(lower));
        const expected = lower;
        expect(actual).toEqual(expected);
    });
});
