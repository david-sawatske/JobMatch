import React, { Component } from 'react';
import PersonalInfo from './personal_info'
import ResumePhoto from './resume_photo'
import Locations from './locations'
import Technologies from './technologies'

export default class UserForm extends Component {
  render() {
    const { updatePersonalData, updateResumeImageData,
            updateLocationsData, updateTechsData } = this.props;

    return (
      <div className="user-form">
        <Technologies updateTechsData={updateTechsData} />
        <Locations updateLocationsData={updateLocationsData} />
        <PersonalInfo updatePersonalData={updatePersonalData} />
        <ResumePhoto updateResumeImageData={updateResumeImageData} />
      </div>
    );
  }
};
