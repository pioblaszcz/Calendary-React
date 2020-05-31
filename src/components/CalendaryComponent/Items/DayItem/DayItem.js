import React from 'react';

import { Day, Dott } from './DayItem.css';

function DayItem({ day, isActive, isFocus }) {

    const importantDays = [1, 2, 3, 4, 17, 31];

    return (
        <Day isActive={isActive} isFocus={isFocus}>
            {day}
            {isActive && importantDays.includes(day) ? <Dott isFocus={isFocus} /> : null}
        </Day>
    )
}

export default DayItem;