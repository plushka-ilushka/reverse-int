module.exports = function reverse (n) {
    let test = n
    .toString()
    .split('')
    .reverse()
    .join('');

return parseInt(test, 10)
}
