import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signInUser } from '../redux/actions/redux-token-auth-config';
import { http } from '../lib/http';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '//add your email id',
      password: '//add your password'
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    const { signInUser } = this.props;
    const {
      email,
      password
    } = this.state;
    signInUser({email, password}).then((resp) => {
      console.log('resp is', resp);
      this.props.history.push('/');
    }).catch((error) => {
      console.log('error is', error);
    });
  }

  render() {
    const { submitForm } = this;
    return (
      <div>
        <form onSubmit={submitForm}>
           <button>Log in</button>
        </form>
      </div>
    );
  }

}

export default connect(null, { signInUser })(SignInPage);