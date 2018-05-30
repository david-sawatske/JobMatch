import React, { Component } from 'react';
import PersonalInfo from './personal_info'

export default class UserForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      github: '',
      linkedIn: ''
    }

    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="user-form">
        <PersonalInfo update={this.update} />
      </div>
    );
  }
}
