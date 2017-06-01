import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLinks';

export default class Link extends React.Component {

  render () {
    return (
      <div>
        <PrivateHeader title='Your Links'/>
        <LinksList />
        <AddLinks />
      </div>
    );
  }
}
