function printTimeToWalk(stepsCount, footstepMeters, speedKMH) {
    const metersBeforeRest = 500;

    let distanceMeters = stepsCount * footstepMeters;
    let speedMeterSec = speedKMH * (1000 / 3600);
    let timeSecs = distanceMeters / speedMeterSec;

    let restMinutes = Math.floor(distanceMeters / metersBeforeRest);

    let hours = Math.floor(timeSecs / 3600);
    let minutes = Math.floor(timeSecs / 60) + restMinutes;
    let seconds = Math.round(timeSecs % 60);

    console.log(`${hours.toString().padStart(2, 0)}:${(minutes).toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`);
}