function printMathOperationResult(fistNum, secondNum, operator) {
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b
    };

    let mathOperation = operations[operator];
    console.log(mathOperation(fistNum, secondNum));
}

// More effective function

function calcMathOperation(operator, ...nums) {
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b
    };

    return nums.reduce(operations[operator], nums.shift());
}
