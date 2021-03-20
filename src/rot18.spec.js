const rot18 = require('./rot18');

describe('rot18', () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const rotatedLower = 'nopqrstuvwxyzabcdefghijklm';
    const rotatedUpper = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    const rotatedNumbers = '5678901234';
    it('does not rotate lower characters', () => {
        const actual = rot18(lower);
        const expected = rotatedLower;
        expect(actual).toEqual(expected);
    });
    it('does not rotate upper characters', () => {
        const actual = rot18(upper);
        const expected = rotatedUpper;
        expect(actual).toEqual(expected);
    });
    it('rotates upper + numbers +lower correctly', () => {
        const actual = rot18(upper + numbers + lower);
        const expected = rotatedUpper + rotatedNumbers + rotatedLower;
        expect(actual).toEqual(expected);
    });
    it('rotates numbers correctly', () => {
        const actual = rot18(numbers);
        const expected = rotatedNumbers;
        expect(actual).toEqual(expected);
    });
    it('rotating numbers twice nullifies rotation', () => {
        const actual = rot18(rot18(numbers));
        const expected = numbers;
        expect(actual).toEqual(expected);
    });
});
