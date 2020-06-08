import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import { Day, DayInside, Dott } from './DayItem.css';
import { changeFocusDay, changeActiveDay } from '../../../../redux/actions/actions';

function DayItem({
    day,
    isActive,
    dayActive,
    importantDay,
    change_focus_day,
    change_active_day,
    dayFocus,
    activeDay,
    isWhite
}) {

    let isFocus = false;
    useMemo(() => { if (dayActive) change_active_day(day); }, [dayActive, change_active_day, day])
    useMemo(() => {
        if (dayFocus === day) isFocus = true;
        else isFocus = false;
    }, [dayFocus, day])
    let activeDayNumber = new Date().getUTCDate();
    let moveHeight = 0;

    if (activeDayNumber / 7 > 1 && activeDayNumber / 7 < 2) moveHeight = 1;
    else if (activeDayNumber / 7 > 2 && activeDayNumber / 7 < 3) moveHeight = 2.4;
    else if (activeDayNumber / 7 > 3 && activeDayNumber / 7 < 4) moveHeight = 3.70;
    else if (activeDayNumber / 7 > 4 && activeDayNumber / 7 < 5) moveHeight = 5.2;
    else if (activeDayNumber / 7 > 5 && activeDayNumber / 7 < 6) moveHeight = 6.9;
    else moveHeight = -0.35;

    if (activeDayNumber > 7) activeDayNumber %= 7;
    if (activeDayNumber === 2) activeDayNumber = 45;
    else if (activeDayNumber === 3) activeDayNumber = 100;
    else if (activeDayNumber === 4) activeDayNumber = 150;
    else if (activeDayNumber === 5) activeDayNumber = 210;
    else if (activeDayNumber === 6) activeDayNumber = 270;
    else if (activeDayNumber === 6) activeDayNumber = 270;
    else if (activeDayNumber === 7) activeDayNumber = 320;

    return (
        <Day
            isWhite={isWhite}
            isActive={isActive}
            dayActive={activeDay === day && isActive ? true : false}
            isFocus={dayFocus === day && isActive}
            animationActive={dayActive !== isFocus && dayActive ? true : false}
            onClick={() => isActive ? change_focus_day(day) : null}>
            {day}
            {dayActive && isActive ? <DayInside
                isWhite={isWhite}
                activeDayNumber={activeDayNumber}
                moveHeight={moveHeight}
                animationActive={activeDay !== dayFocus ? true : false}
            ><p>{day}</p></DayInside> : null}
            {importantDay && isActive ? <Dott dayActive={dayActive} isFocus={isFocus} /> : null}
        </Day>
    )
}

const mapDispatchToProps = dispatch => ({
    change_focus_day: day => dispatch(changeFocusDay(day)),
    change_active_day: day => dispatch(changeActiveDay(day)),
})

const mapStateToProps = state => ({
    dayFocus: state.dayFocus,
    activeDay: state.activeDay,
    isWhite: state.isWhite,
})

export default connect(mapStateToProps, mapDispatchToProps)(DayItem);