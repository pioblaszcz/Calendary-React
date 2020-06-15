export default function (month) {
    const date = new Date();
    const isFocus = date.getDate()
    let dayFirst = new Date(date.getFullYear(), month, 0).getUTCDay();
    const dayNumber = new Date(date.getFullYear(), month + 1, 0).getDate();
    const dayNumberBefore = new Date(date.getFullYear(), month, 0).getDate();

    let DayTab = [];

    if (dayFirst === 6) dayFirst = -1;

    for (let i = 0; i < 42; i++) {
        if (i > dayFirst + dayNumber) DayTab.push({ day: i - (dayFirst + dayNumber), isAtive: false, isFocus: false, dayActive: false, });
        else {
            if (i <= dayFirst) DayTab.push({ day: dayNumberBefore - dayFirst + i, isAtive: false, isFocus: false, dayActive: false, });
            else {
                if (i - dayFirst === isFocus) {
                    if (month === date.getMonth()) DayTab.push({ day: i - dayFirst, isAtive: true, isFocus: true, dayActive: true, });
                    else DayTab.push({ day: i - dayFirst, isAtive: true, isFocus: true, dayActive: false, });
                }
                else DayTab.push({ day: i - dayFirst, isAtive: true, isFocus: false, dayActive: false, });
            }
        }
        if (i === 34 && (DayTab[DayTab.length - 1].day === dayNumber || DayTab[DayTab.length - 1].day < 10)) i = 42;
    }

    return ({ DayTab, month });
} 