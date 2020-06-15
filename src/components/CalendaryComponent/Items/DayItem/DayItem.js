import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import { Day, DayInside, Dott } from './DayItem.css';
import { changeFocusDay, changeActiveDay, } from '../../../../redux/actions/actions';

let isFocus = false;
let moveDay;
let moveHeight;

const setMove = (activeDayNumber) => {

    let moveHeight;

    if (activeDayNumber / 7 > 1 && activeDayNumber / 7 <= 2) moveHeight = 1;
    else if (activeDayNumber / 7 > 2 && activeDayNumber / 7 <= 3) moveHeight = 2.4;
    else if (activeDayNumber / 7 > 3 && activeDayNumber / 7 <= 4) moveHeight = 3.70;
    else if (activeDayNumber / 7 > 4 && activeDayNumber / 7 <= 5) moveHeight = 5.2;
    else if (activeDayNumber / 7 > 5 && activeDayNumber / 7 <= 6) moveHeight = 6.9;
    else moveHeight = 0.35;

    if (activeDayNumber > 7) activeDayNumber %= 7;
    if (activeDayNumber === 2) activeDayNumber = 45;
    else if (activeDayNumber === 3) activeDayNumber = 100;
    else if (activeDayNumber === 4) activeDayNumber = 160;
    else if (activeDayNumber === 5) activeDayNumber = 220;
    else if (activeDayNumber === 6) activeDayNumber = 270;
    else if (activeDayNumber === 0) activeDayNumber = 340;

    return { activeDayNumber, moveHeight };
}

function DayItem({
    day,
    isActive,
    importantDay,
    change_focus_day,
    dayFocus,
    activeDay,
    isWhite,
    month,
    active_month,
    monthNow,
}) {
    useMemo(() => {
        if (dayFocus[0] === day) isFocus = true;
        else isFocus = false;
    }, [dayFocus, day])

    let dayActive = false;
    if (day === activeDay && month === monthNow) dayActive = true;

    useMemo(() => {
        moveDay = setMove(activeDay).activeDayNumber;
        moveHeight = setMove(activeDay).moveHeight;
    }, [activeDay])

    return (
        <Day
            isWhite={isWhite}
            isActive={isActive}
            dayActive={activeDay === day && isActive && month === monthNow ? true : false}
            isFocus={dayFocus[0] === day && isActive && dayFocus[1] === active_month && month === active_month}
            onClick={() => change_focus_day(day, monthNow)}>
            {day}
            {
                dayActive && isActive
                    ?
                    <DayInside
                        isWhite={isWhite}
                        activeDayNumber={moveDay}
                        moveHeight={moveHeight}
                        animationActive={dayActive !== isFocus && active_month === monthNow ? true : false}
                        isFixed={month !== monthNow ? true : false}
                    >
                        <p>{day}</p>
                    </DayInside>
                    : null
            }
            {importantDay && isActive ? <Dott dayActive={dayActive} isFocus={isFocus} /> : null}
        </Day>
    )
}

const mapDispatchToProps = dispatch => ({
    change_focus_day: (day, month) => dispatch(changeFocusDay(day, month)),
    change_active_day: day => dispatch(changeActiveDay(day)),
})

const mapStateToProps = state => ({
    dayFocus: state.dayFocus,
    activeDay: state.activeDay,
    isWhite: state.isWhite,
    active_month: state.month,
    monthNow: state.monthNow,
})

export default connect(mapStateToProps, mapDispatchToProps)(DayItem);