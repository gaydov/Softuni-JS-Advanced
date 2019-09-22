function printAggregatedElements(array) {

    function aggregateElements(arr) {
        const sum = (a, b) => a + b;
        const inverseSum = (a, b) => a + 1 / b;
        const stringConcat = (a, b) => a.concat(b);

        const operationsArray = [[sum, 0], [inverseSum, 0], [stringConcat, ""]];

        return operationsArray.map(x => array.reduce(...x));
    }


    console.log(aggregateElements(array).join("\n"));
}