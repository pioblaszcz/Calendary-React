import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import { CalendaryContainer, HeaderCalendaryContainer, MainCalendaryContainer, H1, I, Days, DayItem, DayList } from './Calendary.css';
import { changeMonth } from '../../redux/actions/actions';
import { Day } from './Items';

import { DateScript } from './Scripts';

function Calendary({ change_month, importantDays }) {

    const month = new Date().getMonth();
    let DayTab = DateScript(month);

    DayTab = useMemo(
        () =>
            DayTab.map((item, id) => {
                let important = false;
                importantDays.map(importantDay => importantDay.day === item.day && month === importantDay.month ? important = true : null);
                return <Day
                    key={id}
                    day={item.day}
                    isActive={item.isAtive}
                    dayActive={item.dayActive}
                    importantDay={important}
                />
            }),
        [DayTab, importantDays, month]
    )

    change_month(month)

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

const mapDispatchToProps = dispatch => ({
    change_month: month => dispatch(changeMonth(month)),
});

const mapStateToProps = state => ({
    importantDays: state.importantDays,
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendary);