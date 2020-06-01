import React from 'react';

import { CalendaryContainer, HeaderCalendaryContainer, MainCalendaryContainer, H1, I, Days, DayItem, DayList } from './Calendary.css';
import { Day } from './Items';

import { DateScript } from './Scripts';

function Calendary() {

    let DayTab = DateScript();

    DayTab = DayTab.map((item, id) => <Day key={id} day={item.day} isActive={item.isAtive} isFocus={item.isFocus} />)

    return (
        <CalendaryContainer>
            <HeaderCalendaryContainer>
                <H1>2020 Cze</H1>
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