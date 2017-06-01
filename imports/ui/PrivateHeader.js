import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => Accounts.logout()}>Logout</button>
    </div>
  )
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
