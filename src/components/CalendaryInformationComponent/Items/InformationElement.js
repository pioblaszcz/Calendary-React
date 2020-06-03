import React from 'react';
import { connect } from 'react-redux';

import { Information, AddInformation } from './InformationElement.css';

function InformationElement({ importantDays, dayFocus }) {
    const informationElement = importantDays.map((importantDay, id) => importantDay.day === dayFocus ? <Information key={id}><h2>{importantDay.description}</h2></Information> : null);

    return (
        <>
            {informationElement[0] !== null ? informationElement : <Information><h2>Brak wydarzeń</h2></Information>}
            <AddInformation><i className="fas fa-plus"></i></AddInformation>
        </>
    )
}

const mapStateToProps = state => ({
    importantDays: state.importantDays,
    dayFocus: state.dayFocus,
})

export default connect(mapStateToProps, null)(InformationElement);