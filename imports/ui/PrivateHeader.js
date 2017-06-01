import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

export default class PrivateHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout () {

    Accounts.logout((err) => {
      console.log('Logout callback', err);
    });
    browserHistory.replace('/');
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    )
  }
}

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};
