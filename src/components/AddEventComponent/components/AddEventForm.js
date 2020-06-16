import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

import { AddComponentContainer, Div } from '../AddEventComponent.css'

const required = value => (value ? undefined : 'This field is required!');

function AddEventForm({ onSubmit, isAddClicked, remove_event, isWhite }) {

    const [activeFiled, setActiveField] = useState('Event');
    const [isAllDay, setAllDay] = useState(false);

    return (
        <AddComponentContainer activeFiled={activeFiled} isAddClicked={isAddClicked} isWhite={isWhite}>
            <i className="fas fa-times" onClick={remove_event}></i>
            <i className="fas fa-calendar-check" onClick={() => setActiveField('Event')}></i>
            <i className="fas fa-star" onClick={() => setActiveField('Counting')}></i>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Field name="description" validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        <input {...input}
                                            type="text"
                                            placeholder={activeFiled === "Event" ? "Wpisz nazwę wydarzenia..." : "Wpisz nazwę rocznicy..."}
                                        />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Div className="isAllDay" isAllDay={isAllDay}>
                                <label>Cały dzień: </label>
                                <div className="checkboxTrue" onClick={() => setAllDay(true)}><p>tak</p></div>
                                <div className="checkboxFalse" onClick={() => setAllDay(false)}><p>nie</p></div>
                            </Div>
                            {!isAllDay ?
                                <Field name="time" validate={required}>
                                    {({ input, meta }) => (
                                        <div>
                                            <input {...input} type="text" placeholder="Wpisz czas: np. '12:00 - 20:20'" />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                : null}
                            <Field name="descriptionLong">
                                {({ input, meta }) => (
                                    <div className="descriptionLong">
                                        <label>{activeFiled === "Event" ? "Opis wydarzenia" : "Opis rocznicy"}</label>
                                        <textarea {...input}
                                            placeholder={activeFiled === "Event" ? "Tu opisz wydarzenie..." : "Tu opisz rocznice..."}
                                        />
                                    </div>
                                )}
                            </Field>
                            <div className="buttons">
                                <button type="submit" disabled={submitting || pristine} onClick={() => setTimeout(form.reset, 500)}>
                                    <i className="fas fa-check-circle"></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        form.reset();
                                        setAllDay(false);
                                    }}
                                    disabled={submitting || pristine}
                                >
                                    <i className="fas fa-redo-alt"></i>
                                </button>
                            </div>
                        </form>
                    )
                }}
            />
        </AddComponentContainer>
    )
}




export default AddEventForm;