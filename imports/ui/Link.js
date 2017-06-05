import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLinks from './AddLinks';
import LinksListFilters from './LinksListFilters';

export default () => {
  return (
    <div>
      <PrivateHeader title='Your Links' />
      <LinksListFilters />
      <AddLinks />
      <LinksList />
    </div>
  )
};
