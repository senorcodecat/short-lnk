import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState ({error: 'Unable to login. Please check email and password'});
      } else {
        this.setState ({error: ''});
      }
    });
  }

  render () {
    return (
      <div className='boxed-view'>
        <div className='boxed-view__box'>
          <h1>Short Lnk</h1>
          <form onSubmit={this.onSubmit} noValidate className="boxed-view__form" >
            <input type='email' ref='email' name='email' placeholder='Email'/>
            <input type='password' ref='password' name='password' placeholder='Password'/>
            <button className='button'>Login</button>
          </form>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <Link to='/signup'>Don't have an account?</Link>
        </div>
      </div>
    );
  }
}
