export default function () {
    const date = new Date();
    const isFocus = date.getDate()
    let dayFirst = new Date(date.getFullYear(), date.getMonth(), 0).getUTCDay();
    const dayNumber = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const dayNumberBefore = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    let DayTab = [];

    if (dayFirst === 6) dayFirst = -1;

    for (let i = 0; i < 42; i++) {
        if (i > dayFirst + dayNumber) DayTab.push({ day: i - (dayFirst + dayNumber), isAtive: false, isFocus: false });
        else {
            if (i <= dayFirst) DayTab.push({ day: dayNumberBefore - dayFirst + i, isAtive: false, isFocus: false });
            else {
                if (i - dayFirst === isFocus) DayTab.push({ day: i - dayFirst, isAtive: true, isFocus: true });
                else DayTab.push({ day: i - dayFirst, isAtive: true, isFocus: false });
            }
        }
        if (i === 34 && (DayTab[DayTab.length - 1].day === dayNumber || DayTab[DayTab.length - 1].day < 10)) i = 42;
    }

    return DayTab;
} 