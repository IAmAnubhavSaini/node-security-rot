function rot13n(input, n) {
    return input
        .split('')
        .map(i => i.charCodeAt(0))
        .map(d => {
            if (d >= 65 && d <= 90) {
                let x = d + n;
                let r = x % 91;
                if (r >= 0 && r < 65) {
                    return r + 65;
                } else return x;
            } else return d;
        })
        .map(d => {
            if (d >= 97 && d <= 122) {
                let x = d + n;
                let r = x % 123;
                if (r >= 0 && r < 97) {
                    return r + 97;
                } else return x;
            } else return d;
        })
        .map(d => String.fromCharCode(d))
        .join('');
}

function rotations(input) {
    return Array(26)
        .fill(0)
        .map((_, i) => i + 1)
        .map(i => ({i, rot: rot13n(input, i)}));
}

module.exports = {
    rot13n, rotations
};
