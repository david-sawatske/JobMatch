import React, { Component } from 'react';
import PersonalInfo from './personal_info'
import Technologies from './technologies'
import ResumePhoto from './resume_photo'
import Locations from './locations'
import Salary from './salary'
import Benefits from './benefits'

export default class UserForm extends Component {
  render() {
    const { updatePersonalData, updateResumeImageData, updateTechsData,
            updateLocationsData, updateBenefitsData, updateSalaryData } = this.props;

    return (
      <div className="user-form">
        <Salary updateSalaryData={updateSalaryData} />
        <Technologies updateTechsData={updateTechsData} />
        <Benefits updateBenefitsData={updateBenefitsData} />
        <Locations updateLocationsData={updateLocationsData} />
        <PersonalInfo updatePersonalData={updatePersonalData} />
        <ResumePhoto updateResumeImageData={updateResumeImageData} />
      </div>
    );
  }
};
