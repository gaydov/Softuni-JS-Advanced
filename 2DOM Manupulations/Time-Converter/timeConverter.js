function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    function convertFromDays() {

        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }

    function convertFromHours() {

        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }

    function convertFromMinutes() {

        days.value = minutes.value / 60 / 24;
        hours.value = minutes.value / 60;
        seconds.value = minutes.value * 60;
    }

    function convertFromSeconds() {

        days.value = seconds.value / 60 / 60 / 24;
        hours.value = seconds.value / 60 / 60;
        minutes.value = seconds.value / 60;
    }

    document.getElementById('daysBtn').addEventListener('click', convertFromDays);
    document.getElementById('hoursBtn').addEventListener('click', convertFromHours);
    document.getElementById('minutesBtn').addEventListener('click', convertFromMinutes);
    document.getElementById('secondsBtn').addEventListener('click', convertFromSeconds);
}