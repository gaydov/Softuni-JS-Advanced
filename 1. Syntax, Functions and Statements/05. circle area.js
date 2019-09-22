function printCircleArea(radius) {

    function calcCircleArea(radius) {
        if (typeof radius === "number") {
            return Math.PI * Math.pow(radius, 2);
        }
    }

    let circleArea = calcCircleArea(radius);
    console.log((circleArea !== undefined) ? circleArea.toFixed(2) : `We can not calculate the circle area, because we receive a ${typeof radius}.`)
}