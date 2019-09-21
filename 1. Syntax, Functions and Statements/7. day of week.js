function getWeekdayNumber(dayName) {
    const weekDays = {
        'MONDAY': 1,
        'TUESDAY': 2,
        'WEDNESDAY': 3,
        'THURSDAY': 4,
        'FRIDAY': 5,
        'SATURDAY': 6,
        'SUNDAY': 7,
    };

    // make the search case-insensitive
    let dayNameCaps = dayName.toUpperCase();

    let dayNum = weekDays[dayNameCaps];
    return dayNum ? dayNum : "error";
}