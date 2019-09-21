function printStrLengthInfo(...strings) {
    let strLenSum = strings.reduce((a, b) => a + b.length, 0);
    let avgStrLength = Math.floor(strLenSum / strings.length);

    console.log(strLenSum);
    console.log(avgStrLength);
}

printStrLengthInfo('pasta', '5', '22.3');