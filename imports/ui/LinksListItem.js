import { Meteor } from 'meteor/meteor';
import React from 'react';
import PropTypes from 'prop-types';
import { Links } from '../api/links';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      justCopied: false,
      justHidden: false
    };
  }

  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({justCopied: true});
      setTimeout(() => this.setState({ justCopied: false }), 1000);
    }).on('error', () => {
      alert('It did not work.');
    })
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render () {
    return (
      <div>
        <li>
          {this.props.url} <br />
          {this.props.shortUrl} <br />
          {this.props.visible.toString()} <br />
        </li>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? "Copied" : "Copy"}</button>
        <button ref='hide' onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible );
        }}>
          {this.props.visible ? "Hide" : "Hidden"}</button>
      </div>
    );
  }
}

LinksListItem.propTypes = {
  shortUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
};
