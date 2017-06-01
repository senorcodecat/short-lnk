import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import React from 'react';
import { Links } from '../api/links';

export default class AddLinks extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    };
  }

  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="url" placeholder="URL" />
          <button>Add Link</button>
        </form>
      </div>
    )
  }
}
