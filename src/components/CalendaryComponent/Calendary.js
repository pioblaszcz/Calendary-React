import React from 'react';

import { CalendaryContainer, HeaderCalendaryContainer, MainCalendaryContainer, H1, I, Days, DayItem, DayList } from './Calendary.css';
import { Day } from './Items';

function Calendary() {

    const date = new Date();
    const isFocus = date.getDate()
    const dayFirst = new Date(date.getFullYear(), date.getMonth(), 0).getUTCDay();
    const dayNumber = new Date(date.getMonth(), date.getYear(), 0).getDate();
    const dayNumberBefore = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    let DayTab = [];

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

    console.log(DayTab)

    DayTab = DayTab.map((item, id) => <Day key={id} day={item.day} isActive={item.isAtive} isFocus={item.isFocus} />)

    return (
        <CalendaryContainer>
            <HeaderCalendaryContainer>
                <H1>2020 Maj</H1>
                <I className="far fa-calendar-alt"></I>
                <I className="fas fa-ellipsis-v" dots={true}></I>
                <Days>
                    <DayItem>PON</DayItem>
                    <DayItem>WTO</DayItem>
                    <DayItem>ŚRO</DayItem>
                    <DayItem>CZW</DayItem>
                    <DayItem>PIĄ</DayItem>
                    <DayItem>SOB</DayItem>
                    <DayItem>NDZ</DayItem>
                </Days>
            </HeaderCalendaryContainer>
            <MainCalendaryContainer>
                <DayList>
                    {DayTab}
                </DayList>
            </MainCalendaryContainer>
        </CalendaryContainer>
    )
}

export default Calendary;