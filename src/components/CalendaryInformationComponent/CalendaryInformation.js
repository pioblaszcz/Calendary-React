import React from 'react';
import { connect } from 'react-redux';

import { Compartment } from './CalendaryInformation.css';
import { InformationElement } from './Items';

function CalendaryInformation({ isWhite }) {
    return (
        <>
            <Compartment isWhite={isWhite}></Compartment>
            <InformationElement></InformationElement>
        </>
    )
}

const mapStateToProps = state => ({
    isWhite: state.isWhite,
})

export default connect(mapStateToProps, null)(CalendaryInformation);