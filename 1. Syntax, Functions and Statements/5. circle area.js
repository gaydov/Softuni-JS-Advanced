function printCircleArea(radius) {
    let argumentType = typeof radius;

    if (argumentType === "number") {
        let circleArea = Math.PI * Math.pow(radius, 2);
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argumentType}.`)
    }
}