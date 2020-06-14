import { combineReducers } from 'redux';
import contactSlice from './contactReducer/contactSlice';
import filterSlice from './filterReducer/filterSlice';

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
