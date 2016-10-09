import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { Input } from './common';

class SearchBox extends Component {

    render() {
        return (
            <View>
                <Input
                    placeholder='Search Contacts'
                    secureTextEntry={false}
                    value={this.props.searchText}
                    onChangeText={(text) => this.props.searchContacts(text)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => (
    { 
        contacts: state.contacts,
        selectedContactId: state.selectedContactId,
        searchText: state.searchText
     }
);

export default connect(mapStateToProps, actions)(SearchBox);
