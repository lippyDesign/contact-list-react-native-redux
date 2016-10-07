import { combineReducers } from 'redux';

import ContactReducer from './ContactReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    contacts: ContactReducer,
    selectedContactId: SelectionReducer
});
