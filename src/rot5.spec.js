const rot5 = require('./rot5');

describe('rot5', () => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    // const rotatedLower = 'nopqrstuvwxyzabcdefghijklm'
    // const rotatedUpper = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    const rotatedNumbers = '5678901234';
    it('does not rotate lower characters', () => {
        const actual = rot5(lower);
        const expected = lower;
        expect(actual).toEqual(expected);
    });
    it('does not rotate upper characters', () => {
        const actual = rot5(upper);
        const expected = upper;
        expect(actual).toEqual(expected);
    });
    it('rotates upper + numbers +lower correctly', () => {
        const actual = rot5(upper + numbers + lower);
        const expected = upper + rotatedNumbers + lower;
        expect(actual).toEqual(expected);
    });
    it('rotates numbers correctly', () => {
        const actual = rot5(numbers);
        const expected = rotatedNumbers;
        expect(actual).toEqual(expected);
    });
    it('rotating numbers twice nullifies rotation', () => {
        const actual = rot5(rot5(numbers));
        const expected = numbers;
        expect(actual).toEqual(expected);
    });
});
