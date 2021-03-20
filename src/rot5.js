function rot5(input) {
    return input
        .split('')
        .map(i => i.charCodeAt(0))
        .map(d => d >= 48 && d <= 57 ? d + 5 > 57 ? d - 5 : d + 5 : d)
        .map(d => String.fromCharCode(d))
        .reduce((a, c) => a + c, '');
}

module.exports = rot5;
