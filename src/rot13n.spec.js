const {rot13n, rotations} = require('./rot13n');

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';

describe('rot13n', () => {
    for (let i = 1; i <= 26; i++) {
        /* rot13n() */
        (k => it(`rotates lower characters correctly for n = ${k}`, () => {
            const actual = rot13n(lower, k);
            const expected = lower.slice(k) + lower.slice(0, k);
            expect(actual).toEqual(expected);
        }))(i);

        /* rot13n(rot13n()) */
        (j => it(`double rotation on lower characters does not nullify for n = ${j}`, () => {
            const actual = rot13n(rot13n(lower, j), j);
            const expected = lower;
            if (i === 26 || i === 13) {
                expect(actual).toEqual(expected);
            } else {
                expect(actual).not.toEqual(expected);
            }
        }))(i);

        (l => it(`rotates upper characters correctly for n = ${l}`, () => {
            const actual = rot13n(upper, l);
            const expected = upper.slice(i) + upper.slice(0, l);
            expect(actual).toEqual(expected);
        }))(i);
    }


    // it('double rotation on upper characters nullifies', () => {
    //     const actual = rot13n(rot13n(upper))
    //     const expected = upper
    //     expect(actual).toEqual(expected)
    // })
    // it('rotates lower+upper correctly', () => {
    //     const actual = rot13n(lower + upper)
    //     const expected = rotatedLower + rotatedUpper
    //     expect(actual).toEqual(expected)
    // })
    // it('rotates upper+lower correctly', () => {
    //     const actual = rot13n(upper + lower)
    //     const expected = rotatedUpper + rotatedLower
    //     expect(actual).toEqual(expected)
    // })
    // it('rotates upper + numbers +lower correctly', () => {
    //     const actual = rot13n(upper + numbers + lower)
    //     const expected = rotatedUpper + numbers + rotatedLower
    //     expect(actual).toEqual(expected)
    // })
});


describe('rotations', () => {
    const expected = [
        {i: 1, rot: 'bcdefghijklmnopqrstuvwxyza'},
        {i: 2, rot: 'cdefghijklmnopqrstuvwxyzab'},
        {i: 3, rot: 'defghijklmnopqrstuvwxyzabc'},
        {i: 4, rot: 'efghijklmnopqrstuvwxyzabcd'},
        {i: 5, rot: 'fghijklmnopqrstuvwxyzabcde'},
        {i: 6, rot: 'ghijklmnopqrstuvwxyzabcdef'},
        {i: 7, rot: 'hijklmnopqrstuvwxyzabcdefg'},
        {i: 8, rot: 'ijklmnopqrstuvwxyzabcdefgh'},
        {i: 9, rot: 'jklmnopqrstuvwxyzabcdefghi'},
        {i: 10, rot: 'klmnopqrstuvwxyzabcdefghij'},
        {i: 11, rot: 'lmnopqrstuvwxyzabcdefghijk'},
        {i: 12, rot: 'mnopqrstuvwxyzabcdefghijkl'},
        {i: 13, rot: 'nopqrstuvwxyzabcdefghijklm'},
        {i: 14, rot: 'opqrstuvwxyzabcdefghijklmn'},
        {i: 15, rot: 'pqrstuvwxyzabcdefghijklmno'},
        {i: 16, rot: 'qrstuvwxyzabcdefghijklmnop'},
        {i: 17, rot: 'rstuvwxyzabcdefghijklmnopq'},
        {i: 18, rot: 'stuvwxyzabcdefghijklmnopqr'},
        {i: 19, rot: 'tuvwxyzabcdefghijklmnopqrs'},
        {i: 20, rot: 'uvwxyzabcdefghijklmnopqrst'},
        {i: 21, rot: 'vwxyzabcdefghijklmnopqrstu'},
        {i: 22, rot: 'wxyzabcdefghijklmnopqrstuv'},
        {i: 23, rot: 'xyzabcdefghijklmnopqrstuvw'},
        {i: 24, rot: 'yzabcdefghijklmnopqrstuvwx'},
        {i: 25, rot: 'zabcdefghijklmnopqrstuvwxy'},
        {i: 26, rot: 'abcdefghijklmnopqrstuvwxyz'}];

    it('generates output correctly', () => {
        const actual = rotations(lower);
        expect(actual).toEqual(expected);
    });
});
