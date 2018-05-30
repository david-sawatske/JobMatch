import React, { Component } from 'react';
import PersonalInfo from './personal_info'
import CVPhoto from './cv_photo'

export default class UserForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      github: '',
      linkedIn: ''
    }
  }

  update = field => (
     e => this.setState({
      [field]: e.currentTarget.value
    })
  )

  onClick = () => {
    const { updatePersonalData } =  this.props;

    updatePersonalData(this.state)
  }

  render() {
    return (
      <div className="user-form">
        <PersonalInfo update={this.update} />
        <CVPhoto />

        <button onClick={this.onClick}></button>
      </div>
    );
  }
}
