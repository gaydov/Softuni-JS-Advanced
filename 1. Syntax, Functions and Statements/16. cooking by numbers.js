function printCookingNums(inputArr) {
    const operations = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => ++x,
        bake: (x) => x *= 3,
        fillet: (x) => x *= 0.8
    };

    let number = Number(inputArr.shift());

    inputArr.forEach(op => console.log(number = operations[op](number)));
}