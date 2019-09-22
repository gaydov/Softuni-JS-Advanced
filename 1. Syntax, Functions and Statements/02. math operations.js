function printMathOperationResult(firstNum, secondNum, operator) {

    function performMathOperation(firstNum, secondNum, operator) {
        const operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
            "%": (a, b) => a % b,
            "**": (a, b) => a ** b
        };

        let mathOperation = operations[operator];
        return mathOperation(firstNum, secondNum);
    }

    console.log(performMathOperation(firstNum, secondNum, operator));
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
