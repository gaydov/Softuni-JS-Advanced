function calcSumNumbersRange(n, m) {

    let result = 0,
        rangeStart = Number(n),
        rangeEnd = Number(m);

    for (let i = rangeStart; i <= rangeEnd; i++) {
        result += i;
    }

    return result;
}