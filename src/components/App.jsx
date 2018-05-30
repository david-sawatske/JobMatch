import React, { Component } from 'react';
import UserForm from './user_form/user_form_container'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}
