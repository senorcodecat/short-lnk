import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';
import React from 'react';

export default class AddLinks extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.state = {
      url: '',
      isOpen: false,
      error: ''
    };
  }
  onSubmit (e) {
    const { url } = this.state;

    e.preventDefault();

    Meteor.call('links.insert', url, (err, res) => {
      if(!err) {
        this.setState({url: '', isOpen: false, error: ''});
      } else {
        this.setState({error: err.reason})
      }
    });
  }
  onChange (e) {
    this.setState({
      url: e.target.value
    });
  }
  handleModalOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
      url: '',
      error: ''
    })
  }
  handleModalClose() {
    this.setState({
      isOpen: !this.state.isOpen,
      url: '',
      error: ''
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleModalOpen} className='button'>Add Link</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={() => this.setState({isOpen: false})}
          className="boxed-view__box"
          overlayClassName="boxed-view boxed-view--modal"
          >
          <h1>Add Link</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined }
          <form onSubmit={this.onSubmit} className='boxed-view__form'>
            <input
              type="text"
              placeholder="URL"
              ref="url"
              value={this.state.url}
              onChange={this.onChange}/>
            <button className='button'>Add Link</button>
            <button type="button" className='button button--secondary' onClick={this.handleModalClose}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}
