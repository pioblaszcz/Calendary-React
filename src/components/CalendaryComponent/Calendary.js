import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { CalendaryContainer, HeaderCalendaryContainer, MainCalendaryContainer, H1, I, Days, DayItem, DayList } from './Calendary.css';
import { changeMonth, changeFocusDay, changeColor } from '../../redux/actions/actions';
import { Day } from './Items';

import { DateScript } from './Scripts';

function Calendary({ change_month, importantDays, change_color, isWhite }) {

    const [showSettings, setShowSettings] = useState(false);

    const month = new Date().getMonth();
    let DayTab = DateScript(month);
    DayTab = useMemo(
        () =>
            DayTab.map((item, id) => {
                let important = false;
                importantDays.map(importantDay => importantDay ? (importantDay.day === item.day && month === importantDay.month ? important = true : null) : null);
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
            <HeaderCalendaryContainer isWhite={isWhite}>
                <H1>2020 Cze</H1>
                <I className="far fa-calendar-alt" onClick={() => change_color()}></I>
                <I className="fas fa-ellipsis-v" dots={true} onClick={() => setShowSettings(true)}></I>
                {showSettings ? (
                    <div>
                        <i className="fas fa-times" onClick={() => setShowSettings(false)}></i>
                        <span className="first"><i className="fas fa-cog"></i>Ustawienia</span>
                        <span className="second"><i className="fas fa-user"></i><a
                            href="https://github.com/pioblaszcz"
                            target="_blank"
                            rel="noopener noreferrer">AUTOR</a></span>
                    </div>
                ) : null
                }
                <Days>
                    <DayItem>PON</DayItem>
                    <DayItem>WTO</DayItem>
                    <DayItem>ŚRO</DayItem>
                    <DayItem>CZW</DayItem>
                    <DayItem>PIĄ</DayItem>
                    <DayItem>SOB</DayItem>
                    <DayItem>NDZ</DayItem>
                </Days>
            </HeaderCalendaryContainer >
            <MainCalendaryContainer>
                <DayList>
                    {DayTab}
                </DayList>
            </MainCalendaryContainer>
        </CalendaryContainer >
    )
}

const mapDispatchToProps = dispatch => ({
    change_month: month => dispatch(changeMonth(month)),
    change_focus_day: day => dispatch(changeFocusDay(day)),
    change_color: () => dispatch(changeColor()),
});

const mapStateToProps = state => ({
    importantDays: state.importantDays,
    isWhite: state.isWhite,
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendary);