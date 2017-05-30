import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
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

    if (password.length < 9) {
      return this.setState({ error: 'Hey, your password must be more than 8 characters long.'});
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });

    // this.setState({
    //   error: 'Something went horribly wrong.'
    // });
  }

  render () {
    return (
      <div>
        <h1>Signup Page</h1>

        <form onSubmit={this.onSubmit} noValidate>
          <input type='email' ref='email' name='email' placeholder='Email'/>
          <input type='password' ref='password' name='password' placeholder='Password'/>
          <button type='submit'>Enlist</button>
        </form>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <p><Link to="/login">Have an account?</Link></p>
      </div>
    );
  }
}
