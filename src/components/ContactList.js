import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class ContactList extends Component {
  componentWillMount() {
    this.listMaker();
  }

  listMaker() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.contacts);
  }
  
  renderHelper() {
    this.listMaker();
    return (<ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />);
  }

  renderRow(contact) {
    return <ListItem contact={contact} />;
  }

  render() {
    return (
      <View>
        {this.renderHelper()}
      </View>
    );
  }
}

const chooseItems = (searchText, list) => (
  list.filter(({ firstName, lastName }) => (
    firstName.toLowerCase().includes(searchText.toLowerCase())
    || lastName.toLowerCase().includes(searchText.toLowerCase())
    )
  )
);

const mapStateToProps = state => {
  const { searchText, contacts } = state;
  let componentsToShow = searchText ? chooseItems(searchText, contacts) : contacts;
  if (componentsToShow.length === 0) {
    componentsToShow = contacts;
  }
  return {
      searchText,
      contacts: componentsToShow,
    };
};

export default connect(mapStateToProps)(ContactList);
