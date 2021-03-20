const rot5 = require('./rot5');
const rot13 = require('./rot13');

function rot18(input) {
    return rot5(rot13(input));
}

module.exports = rot18;
