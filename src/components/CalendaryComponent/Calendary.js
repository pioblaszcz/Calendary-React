import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { CalendaryContainer, HeaderCalendaryContainer, MainCalendaryContainer, H1, I, Days, DayItem, DayList, BackToActiveDay } from './Calendary.css';
import { changeMonth, changeColor, changeFocusDay, showOrHiiideSettings } from '../../redux/actions/actions';
import { Day } from './Items';

import { DateScript } from './Scripts';

function Calendary({
    change_month,
    importantDays,
    change_color,
    isWhite,
    month_active,
    monthNow,
    activeDay,
    change_focus_day,
    show_settinigs
}) {

    const [showSettings, setShowSettings] = useState(false);
    const [variable, setVariable] = useState(monthNow * 8.33);

    let DayTab = [];

    let touchXStart = 0;
    let touchXEnd = 0;
    let touchXMove = 0;

    for (let i = 0; i < 12; i++) DayTab.push(DateScript(i));

    const months = DayTab.map(day => day.month);

    DayTab = useMemo(
        () =>
            DayTab.map(days => days.DayTab.map((item, id) => {
                let important = false;
                importantDays.map(importantDay => importantDay ? (importantDay.day === item.day && month_active === importantDay.month ? important = true : null) : null);
                return <Day
                    key={id}
                    day={item.day}
                    isActive={item.isAtive}
                    importantDay={important}
                    month={days.month}
                />
            })),
        [DayTab, importantDays, month_active]
    )

    if (month_active < 0) {
        change_month(0);
        return;
    }
    if (month_active > 11) change_month(11);

    let monthsShort = ['Sty', 'Lut', 'Marz', 'Kwie', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Grdz'];

    return (
        <>
            <CalendaryContainer>
                <HeaderCalendaryContainer isWhite={isWhite}>
                    <H1>
                        <i className="fas fa-sort-up arrowFirst" onClick={() => {
                            if (month_active > 0) {
                                change_month(month_active - 1);
                                setVariable(variable - 8.33);
                            }
                        }}></i>
                        2020 {monthsShort[month_active]}
                        <i className="fas fa-sort-up arrowSecond" onClick={() => {
                            if (month_active < 11) {
                                change_month(month_active + 1);
                                setVariable(variable + 8.33);
                            }
                        }}></i>
                    </H1>
                    <I className="far fa-calendar-alt" onClick={() => change_color()}></I>
                    <I className="fas fa-ellipsis-v" dots={true} onClick={setShowSettings}></I>
                    {showSettings ? (
                        < div >
                            <i className="fas fa-times" onClick={() => setShowSettings(false)}></i>
                            <span className="first" onClick={() => {
                                show_settinigs();
                                setShowSettings(false);
                            }}><i className="fas fa-cog"></i>Ustawienia</span>
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
                <MainCalendaryContainer
                    moveRight={month_active < months[5] ? { bool: true, var: variable } : false}
                    moveLeft={month_active > months[5] ? { bool: true, var: variable } : false}
                    move={month_active === months[5] ? variable : false}
                    onTouchStart={(event) => touchXStart = event.targetTouches[0].clientX}
                    onTouchMove={(event) => touchXEnd = event.targetTouches[0].clientX}
                    onTouchEnd={() => {
                        touchXMove = touchXEnd - touchXStart;
                        if (touchXMove > 60) {
                            change_month(month_active + 1);
                            setVariable(variable + 8.33);
                        } else if (touchXMove < -60) {
                            change_month(month_active - 1);
                            setVariable(variable - 8.33);
                        }
                    }}
                >
                    {DayTab.map((day, id) => (<DayList key={id}>{day}</DayList>))}
                </MainCalendaryContainer>
            </CalendaryContainer >
            {
                month_active !== monthNow ? (
                    <BackToActiveDay
                        onClick={() => {
                            change_month(monthNow);
                            setVariable(monthNow * 8.33);
                            change_focus_day(activeDay, monthNow);
                        }}
                    >
                        <p>{activeDay}</p>
                    </BackToActiveDay>
                ) : null
            }
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    change_month: month => dispatch(changeMonth(month)),
    change_focus_day: (day, month) => dispatch(changeFocusDay(day, month)),
    change_color: () => dispatch(changeColor()),
    show_settinigs: () => dispatch(showOrHiiideSettings()),
});

const mapStateToProps = state => ({
    importantDays: state.importantDays,
    isWhite: state.isWhite,
    activeDay: state.activeDay,
    month_active: state.month,
    monthNow: state.monthNow,
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendary);