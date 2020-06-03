
const initialState = {
    days: [],
    month: null,
    dayFocus: null,
    activeDay: null,
    importantDays: [{ day: 2, month: 5, description: "Urodziny Taty", houers: "00 - 24:00" }]
}

export default function (state = initialState, action) {

    switch (action.type) {

        case "ADD_DAY":
            return {
                ...state,
                days: [...state.days, action.payload],
            }

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

        default:
            return {
                ...state,
            }
    }

}