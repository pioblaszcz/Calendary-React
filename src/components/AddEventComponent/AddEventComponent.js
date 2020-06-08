import React from 'react';
import { connect } from 'react-redux';

import { addEventToCalendary, addImportantDay } from '../../redux/actions/actions';
import { AddEventForm } from './components';

function AddEventComponent({ isAddClicked, remove_event, add_important_day, dayFocus, month, isWhite }) {

    const handleAddEventSubmit = (values) => {
        remove_event();
        const day = {
            day: dayFocus,
            month: month,
            description: values.description,
            houers: values.time ? values.time : "Cały dzień",
            descriptionLong: values.descriptionLong ? values.descriptionLong : undefined,
        }
        add_important_day(day);
    }


    return (
        <AddEventForm isAddClicked={isAddClicked} remove_event={remove_event} onSubmit={handleAddEventSubmit} isWhite={isWhite} />
    )
}

const mapStateToProps = state => ({
    isAddClicked: state.isAddClicked,
    dayFocus: state.dayFocus,
    month: state.month,
    isWhite: state.isWhite,
})

const mapDispatchToProps = dispatch => ({
    remove_event: () => dispatch(addEventToCalendary()),
    add_important_day: day => dispatch(addImportantDay(day))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddEventComponent);