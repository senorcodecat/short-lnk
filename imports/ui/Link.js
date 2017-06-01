import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLinks';

export default () => {
  return (
    <div>
      <PrivateHeader title='Your Links' />
      <LinksList />
      <AddLinks />
    </div>
  )
};
