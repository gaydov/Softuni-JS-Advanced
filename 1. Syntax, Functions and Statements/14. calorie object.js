function printCalorieObject(strArray) {
    let result = {};

    for (let i = 0; i < strArray.length - 1; i += 2) {
        result[strArray[i]] = Number(strArray[i + 1]);
    }

    console.log(result);
}