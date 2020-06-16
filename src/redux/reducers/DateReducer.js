
import {
    CHANGE_ACTIVE_DAY,
    CHANGE_FOCUS_DAY,
    ADD_IMPORTANT_DAY,
    DELATE_DAY,
    CHANGE_MONTH,
    CHANGE_CONFIRMED,
    CHANGE_COLOR,
    ADD_EVENT,
    SHOW_OR_HIDE_SETTINGS,
} from '../constants';

const importantDefaultDays = [
    { day: 1, month: 0, description: "Nowy Rok", houers: "00 - 24:00", isDefault: true },
    { day: 6, month: 0, description: "Swięto Trzech Króli", houers: "00 - 24:00", isDefault: true },
    { day: 14, month: 1, description: "Walentynki", houers: "00 - 24:00", isDefault: true },
    { day: 8, month: 2, description: "Swięto kobiet", houers: "00 - 24:00", isDefault: true },
    { day: 10, month: 3, description: "Wielki Piątek", houers: "00 - 24:00", isDefault: true },
    { day: 11, month: 3, description: "Wielki Sobota", houers: "00 - 24:00", isDefault: true },
    { day: 12, month: 3, description: "Niedziela Wielkanocna", houers: "00 - 24:00", isDefault: true },
    { day: 13, month: 3, description: "Poniedziałek Wielkanocny", houers: "00 - 24:00", isDefault: true },
    { day: 1, month: 4, description: "Święto pracy", houers: "00 - 24:00", isDefault: true },
    { day: 2, month: 4, description: "Dzień Flagi RP", houers: "00 - 24:00", isDefault: true },
    { day: 3, month: 4, description: "Swięto Konstytucji Trzeciego Maja", houers: "00 - 24:00", isDefault: true },
    { day: 26, month: 4, description: "Dzień Matki", houers: "00 - 24:00", isDefault: true },
    { day: 31, month: 4, description: "Zielone świątki", houers: "00 - 24:00", isDefault: true },
    { day: 11, month: 5, description: "Boże Ciało", houers: "00 - 24:00", isDefault: true },
    { day: 23, month: 5, description: "Dzień Ojca", houers: "00 - 24:00", isDefault: true },
    { day: 21, month: 6, description: "Przykładowe wydarzenie", houers: "12:00 - 24:00", isDefault: true },
    { day: 15, month: 7, description: "Wniebowzięcie NMP", houers: "00 - 24:00", isDefault: true },
    { day: 1, month: 10, description: "Wszystkich Świętych", houers: "00 - 24:00", isDefault: true },
    { day: 24, month: 10, description: "Wigilia", houers: "00 - 24:00", isDefault: true },
    { day: 25, month: 10, description: "Boże Narodzenie", houers: "00 - 24:00", isDefault: true },
    { day: 26, month: 10, description: "Boże Narodzenie", houers: "00 - 24:00", isDefault: true },
    { day: 31, month: 10, description: "Sylwester (święto)", houers: "00 - 24:00", isDefault: true },
]

const initialState = {
    month: new Date().getMonth(),
    monthNow: new Date().getMonth(),
    dayFocus: [new Date().getDate(), new Date().getMonth()],
    activeDay: new Date().getDate(),
    importantDays: importantDefaultDays,
    isAddClicked: false,
    isSettingsClicked: false,
    isWhite: true,
    isConfirmed: [],
}

export default function (state = initialState, action) {

    switch (action.type) {

        case CHANGE_ACTIVE_DAY:
            return {
                ...state,
                activeDay: action.payload,
            }

        case CHANGE_FOCUS_DAY:
            return {
                ...state,
                dayFocus: action.payload,
            }

        case ADD_IMPORTANT_DAY:
            return {
                ...state,
                importantDays: [...state.importantDays, action.payload]
            }

        case DELATE_DAY:
            return {
                ...state,
                importantDays: action.payload,
            }

        case CHANGE_MONTH:
            return {
                ...state,
                month: action.payload,
            }

        case CHANGE_CONFIRMED:
            return {
                ...state,
                isConfirmed: action.payload,
            }

        case CHANGE_COLOR:
            return {
                ...state,
                isWhite: !state.isWhite,
            }

        case ADD_EVENT:
            return {
                ...state,
                isAddClicked: !state.isAddClicked,
            }

        case SHOW_OR_HIDE_SETTINGS:
            return {
                ...state,
                isSettingsClicked: !state.isSettingsClicked,
            }
        default:
            return {
                ...state,
            }
    }

}