function printIfAllDigitsTheSame(number) {
    let numArray = number.toString().split("").map(d => Number(d));
    let areAllDigitsTheSame = numArray.every(d => d === numArray[0]);
    let sum = numArray.reduce((a, b) => a + Number(b), numArray.shift());

    console.log(areAllDigitsTheSame);
    console.log(sum);
}