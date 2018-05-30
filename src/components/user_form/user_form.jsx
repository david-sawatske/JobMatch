import React, { Component } from 'react';
import PersonalInfo from './personal_info'
import ResumePhoto from './resume_photo'

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
    const { updateResumeImageData } = this.props;

    return (
      <div className="user-form">
        <PersonalInfo update={this.update} />
        <ResumePhoto updateResumeImageData={updateResumeImageData}/>

        <button onClick={this.onClick}></button>
      </div>
    );
  }
}
