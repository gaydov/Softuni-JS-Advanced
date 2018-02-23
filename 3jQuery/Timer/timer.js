function timer() {

    let hoursSpan = $('#hours');
    let minutesSpan = $('#minutes');
    let secondsSpan = $('#seconds');
    let startBtn = $('#start-timer');
    let pauseBtn = $('#stop-timer');

    let isTimerStarted = false;
    let isTimePaused = false;
    let seconds = 0;

    function increaseTime() {
        if (!isTimePaused) {
            seconds++;

            let displayHours = Math.trunc(seconds / 3600);
            let displayMinutes = Math.trunc(seconds / 60) - displayHours * 60;
            let displaySeconds = Math.trunc(seconds % 60);

            hoursSpan.text(`${('0' + displayHours).slice(-2)}`);
            minutesSpan.text(`${('0' + displayMinutes).slice(-2)}`);
            secondsSpan.text(`${('0' + displaySeconds).slice(-2)}`);
        }
    }

    pauseBtn.on('click', function (event) {
        event.preventDefault();
        isTimePaused = true;
    });

    startBtn.on('click', function (event) {
        event.preventDefault();
        isTimePaused = false;

        if (!isTimerStarted) {
            let timer = setInterval(increaseTime, 1000);
            isTimerStarted = true;
        }
    });
}