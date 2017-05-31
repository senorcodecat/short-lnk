import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';
import { Links } from '../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLogout () {

    Accounts.logout((err) => {
      console.log('Logout callback', err);
    });
    browserHistory.replace('/');
  }

  onSubmit (e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    };
  }

  render () {
    return (
      <div>
        <h1>Your Links</h1>
        <button onClick={this.onLogout}>Logout</button>
        <LinksList />
        <p>Add Link</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    );
  }
}
