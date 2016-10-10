import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';

import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { contact, expanded } = this.props;
        const { phone = '', email = '', description = '', id } = contact;
        const itemsToRender = [phone, email, description].map(current => {
            if (current) {
                return (
                    <Text key={`${id}${current}`} style={styles.expansionTextStyle}>
                        {current}
                    </Text>
                );
            }
        });

        if (expanded) {
            return (
                <CardSection>
                    <View style={styles.expansionSectionStyle}>
                        {itemsToRender}
                    </View>                    
                </CardSection>
            );
        }
    }

    render() {
        let { nameStyle } = styles;
        const { id, firstName, lastName } = this.props.contact;
        
        const fullName = `${firstName} ${lastName}`;

        if (this.props.expanded) {
            nameStyle = { fontSize: 23, paddingLeft: 15, color: 'green' };
        }

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectContact(id)}>
                <View>
                    <CardSection>
                        <Text style={nameStyle}>
                            {fullName} 
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nameStyle: {
        fontSize: 19,
        paddingLeft: 15
    },
    expansionSectionStyle: {
        padding: 15
    },
    expansionTextStyle: {
        fontSize: 16,
        color: 'green'
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedContactId === ownProps.contact.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
