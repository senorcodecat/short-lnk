import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class LinksListFilters extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showVisible: true
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.showVisibleTracker = Tracker.autorun(() => {
      this.setState({
        showVisible: Session.get('showVisible')
      });
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.showVisibleTracker.stop();
  }

  render () {
    return (
      <div>
        <label>
          <input type="checkbox" checked={!this.state.showVisible} onChange={(e) => {
            Session.set('showVisible', !e.target.checked);
          }}/>
          show hidden links
        </label>
      </div>
    );
  }
}