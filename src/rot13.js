function rot13(input) {
    return input
        .split('')
        .map(i => i.charCodeAt(0))
        .map(d => d >= 65 && d <= 90 ? d + 13 > 90 ? d - 13 : d + 13 : d)
        .map(d => d >= 97 && d <= 122 ? d + 13 > 122 ? d - 13 : d + 13 : d)
        .map(d => String.fromCharCode(d))
        .reduce((a, c) => a + c, '')
}

module.exports = rot13
