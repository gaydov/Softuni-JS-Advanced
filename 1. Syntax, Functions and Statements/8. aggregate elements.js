function printAggregatedElements(array) {
    const sum = (a, b) => a + b;
    const inverseSum = (a, b) => a + 1 / b;
    const stringConcat = (a, b) => a.concat(b);

    const operationsArray = [[sum, 0], [inverseSum, 0], [stringConcat, ""]];

    let result = operationsArray.map(x => array.reduce(...x));
    console.log(result.join("\n"));
}