import { createStore } from 'redux';
import DateReducer from './reducers/DateReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// const allReducers = combineReducers({ DateReducer });
const store = createStore(DateReducer, composeWithDevTools())

export default store;