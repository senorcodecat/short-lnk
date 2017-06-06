import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button onClick={() => Accounts.logout()} className='button button--header'>Logout</button>
      </div>
    </div>
  )
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
