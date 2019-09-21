function printSquareOfStars(squareSize = 5) {
    let resultArr = new Array(squareSize);

    for (let i = 0; i < squareSize; i++) {
        resultArr[i] = "* ".repeat(squareSize).trim();
    }

    console.log(resultArr.join("\n"));
}