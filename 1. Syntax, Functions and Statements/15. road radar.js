function getSpeedingStatus(speedParams) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    let speedDifference = Number(speedParams[0]) - speedLimits[speedParams[1]];
    let speedingStatus = "";

    if (speedDifference > 0) {
        if (speedDifference <= 20) {
            speedingStatus = "speeding";
        } else if (speedDifference <= 40) {
            speedingStatus = "excessive speeding";
        } else {
            speedingStatus = "reckless driving";
        }
    }

    return speedingStatus;
}