function printStrLengthInfo(...strings) {

    function getStrLenSum(strings) {
        return strings.reduce((a, b) => a + b.length, 0);
    }

    function getAvgStrLength(strings) {
        let strLenSum = getStrLenSum(strings);
        return Math.floor(strLenSum / strings.length);
    }

    console.log(getStrLenSum(strings));
    console.log(getAvgStrLength(strings));
}