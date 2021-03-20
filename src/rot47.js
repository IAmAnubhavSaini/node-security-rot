function rot47(input) {
    return input
        .split('')
        .map(i => i.charCodeAt(0))
        .map(i => i + 47)
        .map(i => i % 127)
        .map(i => i < 80 ? i + 33 : i)
        .map(i => String.fromCharCode(i))
        .join('');
}

module.exports = rot47;
