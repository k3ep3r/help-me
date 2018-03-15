module.exports = function count(s, pairs) {
    let result = 1;
    if (s == "1" || s == "01"){
        for (let i = 0; i < pairs.length; i++) {
            result *= (pairs[i][0] - 1);
        }
        return result % 1000000007;
    }
    return result % 1000000007;
}
