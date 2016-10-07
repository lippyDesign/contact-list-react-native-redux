import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import { Header } from './components/common';
import ContactList from './components/ContactList';

const App = () => (
    <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
            <Header headerText="Contacts List" />
            <ContactList />
        </View>
    </Provider>
);

export default App;
