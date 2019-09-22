function printSquareOfStars(squareSize = 5) {

    function generateSquareOfStars(squareSize) {
        let resultArr = new Array(squareSize);

        for (let i = 0; i < squareSize; i++) {
            resultArr[i] = "* ".repeat(squareSize).trim();
        }

        return resultArr.join("\n");
    }

    console.log(generateSquareOfStars(squareSize));
}