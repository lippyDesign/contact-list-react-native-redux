import { combineReducers } from 'redux';

import ContactReducer from './ContactReducer';
import SelectionReducer from './SelectionReducer';
import SearchingReducer from './SearchingReducer';

export default combineReducers({
    contacts: ContactReducer,
    selectedContactId: SelectionReducer,
    searchText: SearchingReducer
});
