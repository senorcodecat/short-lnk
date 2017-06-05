import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class AddLinks extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      url: ''
    };
  }
  onSubmit (e) {
    const { url } = this.state;

    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if(!err) {
          this.setState({url: ''});
        }
      });
    }
  }
  onChange (e) {
    this.setState({
      url: e.target.value
    });
  }
  render() {
    return (
      <div>
        <p>Add Link</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange}/>
          <button>Add Link</button>
        </form>
      </div>
    )
  }
}
