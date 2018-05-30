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
    this.onClick = this.onClick.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  onClick() {
    const {updatePersonalData} =  this.props;

    updatePersonalData(this.state)
  }

  render() {
    return (
      <div className="user-form">
        <PersonalInfo update={this.update} />

        <button onClick={this.onClick}></button>
      </div>
    );
  }
}
