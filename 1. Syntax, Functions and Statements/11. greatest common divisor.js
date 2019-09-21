function printGreatestCommonDivisor(...numbers) {
    let firstNum = Number(numbers[0]);
    let secondNum = Number(numbers[1]);
    let temp = 0;

    while (secondNum) {
        temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    console.log(firstNum);
}