import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Links } from '../api/links';
import { Tracker } from 'meteor/tracker';

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
      const linksList = Links.find().fetch();
      this.setState({links: linksList});
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount LinksList');
    this.linksTracker.stop();
  }
  renderLinksListItems() {
    return this.state.links.map((link) => {
      return (
        <ul>
          <li key={link._id}>{link.url}</li>
        </ul>
      );
    });
  }
  render () {
    return (
      <div>
        <p>Links List</p>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
}
