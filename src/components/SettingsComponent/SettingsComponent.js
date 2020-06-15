import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Settings, SettingsElement, ConfirmElement } from './SettingsComponent.css';

import { showOrHiiideSettings, delateDay } from '../../redux/actions/actions';

function SettingsInformattion({ isSettingsClicked, isWhite, importantDays, hide_settinigs, delate_days }) {

    const [haveToConfirmed, setHaveToConfirmed] = useState([false]);

    const handleConfirm = (boolien, whichElements) => {
        if (!boolien) setHaveToConfirmed([false]);
        else {
            if (whichElements === 'all') {
                delate_days([]);
                setHaveToConfirmed([false]);
                hide_settinigs();
            } else {
                importantDays = importantDays.filter(day => !day.isDefault === true);
                delate_days(importantDays);
                setHaveToConfirmed([false]);
                hide_settinigs();
            }
        }
    }

    return (
        <Settings showSettings={isSettingsClicked} isWhite={isWhite}>
            <i className="fas fa-times" onClick={() => {
                hide_settinigs();
                setHaveToConfirmed([false]);
            }}></i>
            <h2>Ustawienia</h2>
            <SettingsElement
                isWhite={isWhite}
                onClick={() => setHaveToConfirmed([true, 'all'])}
                isClicked={haveToConfirmed[2] === 'all' ? true : false}
            >
                Wyczyść wszystkie wydarzenia
            </SettingsElement>
            <SettingsElement
                isWhite={isWhite}
                onClick={() => setHaveToConfirmed([true, 'default'])}
                isClicked={haveToConfirmed[2] === 'default' ? true : false}
                elementInQue={2}>
                Wyczyść domyślne wydarzenia
             </SettingsElement>
            {haveToConfirmed[0] ? (
                <ConfirmElement>
                    <h2>Czy jesteś pewny?</h2>
                    <div className="yes" onClick={() => handleConfirm(true, haveToConfirmed[1])}>TAK</div>
                    <div className="no" onClick={() => handleConfirm(false, haveToConfirmed[1])}>NIE</div>
                </ConfirmElement>
            ) : null}
        </Settings>
    )
}

const mapStateToProps = state => ({
    isSettingsClicked: state.isSettingsClicked,
    isWhite: state.isWhite,
    importantDays: state.importantDays,
})

const mapDispatchToProps = dispatch => ({
    hide_settinigs: () => dispatch(showOrHiiideSettings()),
    delate_days: day => dispatch(delateDay(day)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SettingsInformattion);
