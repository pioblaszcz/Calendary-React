import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Information, AddInformation, P, ConfirmAnswer, ShowDetalist, ContainerInformation } from './InformationElement.css';

import { addEventToCalendary, changeConfirmed, delateDay } from '../../../redux/actions/actions';

function InformationElement({ importantDays, dayFocus, add_event, change_confirmed, isConfirmed, delate_day, isWhite }) {
    const allDay = "00 - 24:00";
    let show = false;
    const [showDayDetalist, setShowDayDetalist] = useState([false, null]);

    const delateDay = day => {
        console.log(day);
        importantDays = importantDays.filter(importantDay => importantDay.description !== day.description);

        delate_day(importantDays);
        change_confirmed(true)
    }

    const informationElement = importantDays.map((importantDay, id) => importantDay ? (importantDay.day === dayFocus
        ? <div key={id}>
            <Information isWhite={isWhite}>
                {show = true}
                <h2 onClick={() => setShowDayDetalist([true, id])}>{importantDay.description}</h2>
                {importantDay.houers === allDay ? (<P><div></ div>Cały dzień</P>) : (<P><div></div>{importantDay.houers}</P>)}
                <i className="fas fa-trash-alt" onClick={() => change_confirmed([undefined, id])}></i>
            </Information>
            {isConfirmed[0] === undefined && isConfirmed[1] === id
                ? (
                    <ConfirmAnswer isWhite={isWhite} key={id}>
                        <h3>Czy napewno chcesz usunąć element?</h3>
                        <div className="buttons">
                            <button className="yes" onClick={() => delateDay(importantDay)}> Tak</button>
                            <button className="no" onClick={() => change_confirmed([false, id])}> Nie</button>
                        </div>
                    </ConfirmAnswer>
                )
                : null}
            {showDayDetalist[0] && showDayDetalist[1] === id
                ? (
                    <ShowDetalist isWhite={isWhite} key={id}>
                        <i className="fas fa-times-circle" onClick={() => setShowDayDetalist(false)}></i>
                        <h3>Informacje o elemencie: </h3>
                        <h4>{importantDay.description}</h4>
                        <p>
                            <b>Opis: </b>
                            {importantDay.descriptionLong ? importantDay.descriptionLong.length > 30 ? importantDay.descriptionLong.slice(0, 30) + "..." : importantDay.descriptionLong : "Brak opisu"}
                            <br />
                            <b>Czas: </b>
                            {importantDay.houers}
                            <br />
                            <i className="fas fa-user"></i><span>piotrblaszczakooo@gmail.com</span>
                        </p>
                    </ShowDetalist>
                )
                : null}
        </div>
        : null) : null);

    return (
        <ContainerInformation>
            {show ? informationElement : <Information><h2>Brak wydarzeń</h2></Information>}
            <AddInformation onClick={add_event} isWhite={isWhite}>
                <i className="fas fa-plus"></i>
            </AddInformation>
        </ContainerInformation>
    )
}

const mapStateToProps = state => ({
    importantDays: state.importantDays,
    dayFocus: state.dayFocus,
    isConfirmed: state.isConfirmed,
    isWhite: state.isWhite,
})

const mapDispatchToProps = dispatch => ({
    add_event: () => dispatch(addEventToCalendary()),
    change_confirmed: bool => dispatch(changeConfirmed(bool)),
    delate_day: ([day, id]) => dispatch(delateDay([day, id]))
})

export default connect(mapStateToProps, mapDispatchToProps)(InformationElement);