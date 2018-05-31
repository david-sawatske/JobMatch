import React, { Component } from 'react';
import PersonalInfo from './personal_info'
import Technologies from './technologies'
import ResumePhoto from './resume_photo'
import Locations from './locations'
import Benefits from './benefits'

export default class UserForm extends Component {
  render() {
    const { updatePersonalData, updateResumeImageData, updateTechsData,
            updateLocationsData, updateBenefitsData } = this.props;

    return (
      <div className="user-form">
        <Technologies updateTechsData={updateTechsData} />
        <Benefits updateBenefitsData={updateBenefitsData} />
        <Locations updateLocationsData={updateLocationsData} />
        <PersonalInfo updatePersonalData={updatePersonalData} />
        <ResumePhoto updateResumeImageData={updateResumeImageData} />
      </div>
    );
  }
};
