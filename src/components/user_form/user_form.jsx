import React, { Component } from 'react';
import PersonalInfo from './personal_info'
import ResumePhoto from './resume_photo'
import Locations from './locations'

export default class UserForm extends Component {
  render() {
    const { updatePersonalData, updateResumeImageData,
            updateLocationsData } = this.props;

    return (
      <div className="user-form">
        <PersonalInfo updatePersonalData={updatePersonalData} />
        <ResumePhoto updateResumeImageData={updateResumeImageData} />
        <Locations updateLocationsData={updateLocationsData}/>
      </div>
    );
  }
};
