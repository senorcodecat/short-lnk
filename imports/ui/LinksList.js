import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

import LinksListItem from './LinksListItem';
import { Links } from '../api/links';

export default class LinksList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    console.log('compontentDidMount LinksList');
    this.linksTracker = Tracker.autorun (() => {
      Meteor.subscribe('links');
      const linksList = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({links: linksList});
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
    this.linksTracker.stop();
  }
  renderLinksListItems() {
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
    });
  }
  render () {
    return (
      <div>
        <p>Links List</p>
        <div>
          <ul>
            {this.renderLinksListItems()}
          </ul>
        </div>
      </div>
    );
  }
}
