export const changeFocusDay = (day, month) => ({ type: 'CHANGE_FOCUS_DAY', payload: [day, month] });
export const changeActiveDay = day => ({ type: 'CHANGE_ACTIVE_DAY', payload: day });
export const changeMonth = month => ({ type: 'CHANGE_MONTH', payload: month });
export const addEventToCalendary = bool => ({ type: "ADD_EVENT" });
export const showOrHiiideSettings = bool => ({ type: "SHOW_OR_HIDE_SETTINGS" });
export const addImportantDay = dayObject => ({ type: 'ADD_IMPORTANT_DAY', payload: dayObject });
export const changeConfirmed = bool => ({ type: 'CHANGE_CONFIRMED', payload: bool });
export const delateDay = ([days, id]) => ({ type: 'DELATE_DAY', payload: [days, id] });
export const changeColor = () => ({ type: 'CHANGE_COLOR' });