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
    activeDay
}) {
    let isFocus = false;
    useMemo(() => { if (dayActive) change_active_day(day); }, [dayActive, change_active_day, day])
    useMemo(() => {
        if (dayFocus === day) isFocus = true;
        else isFocus = false;
    }, [dayFocus, day])

    return (
        <Day
            isActive={isActive}
            dayActive={activeDay === day && isActive ? true : false}
            isFocus={isFocus && isActive}
            animationActive={dayActive !== isFocus && dayActive ? true : false}
            onClick={() => isActive ? change_focus_day(day) : null}>
            {day}
            {dayActive ? <DayInside animationActive={dayActive !== isFocus && dayFocus !== null ? true : false} ><p>{day}</p></DayInside> : null}
            {importantDay && isActive ? <Dott dayActive={dayActive} isFocus={isFocus} /> : null}
        </Day>
    )
}

const mapDispatchToProps = dispatch => ({
    change_focus_day: day => dispatch(changeFocusDay(day)),
    change_active_day: day => dispatch(changeActiveDay(day)),
})

export default connect(state => ({
    dayFocus: state.dayFocus,
    activeDay: state.activeDay,
}), mapDispatchToProps)(DayItem);