
const initialState = {
    month: new Date().getMonth(),
    monthNow: new Date().getMonth(),
    dayFocus: [new Date().getDate(), new Date().getMonth()],
    activeDay: new Date().getDate(),
    importantDays: [{ day: 2, month: 5, description: "Urodziny Taty", houers: "00 - 24:00", isDefault: true }, { day: 18, month: 5, description: "Wystawienie ocen", houers: "08 - 16:00", isDefault: true }],
    isAddClicked: false,
    isSettingsClicked: false,
    isWhite: true,
    isConfirmed: [],
}

export default function (state = initialState, action) {

    switch (action.type) {

        case "CHANGE_ACTIVE_DAY":
            return {
                ...state,
                activeDay: action.payload,
            }

        case "CHANGE_FOCUS_DAY":
            return {
                ...state,
                dayFocus: action.payload,
            }

        case "CHANGE_MONTH":
            return {
                ...state,
                month: action.payload,
            }

        case "ADD_EVENT":
            return {
                ...state,
                isAddClicked: !state.isAddClicked,
            }

        case "SHOW_OR_HIDE_SETTINGS":
            return {
                ...state,
                isSettingsClicked: !state.isSettingsClicked,
            }

        case "ADD_IMPORTANT_DAY":
            return {
                ...state,
                importantDays: [...state.importantDays, action.payload]
            }

        case "CHANGE_CONFIRMED":
            return {
                ...state,
                isConfirmed: action.payload,
            }

        case "DELATE_DAY":
            return {
                ...state,
                importantDays: action.payload,
            }

        case "CHANGE_COLOR":
            return {
                ...state,
                isWhite: !state.isWhite,
            }
        default:
            return {
                ...state,
            }
    }

}