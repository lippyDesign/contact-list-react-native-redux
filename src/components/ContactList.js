import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class ContactList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.contacts);
  }

  componentWillUpdate() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.contacts);
  }

  renderRow(contact) {
    return <ListItem contact={contact} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const { contacts, searchText } = state;
  if (searchText) {
    const contactsToShow = contacts.filter(contact => {
      return contact.firstName.toLowerCase()[0] === searchText.toLowerCase() || contact.lastName.toLowerCase()[0] === searchText.toLowerCase();
    });
    return { contacts: contactsToShow };
  } else {
    return { contacts: state.contacts };
  }
};

export default connect(mapStateToProps)(ContactList);
