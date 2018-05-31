import React, { Component } from 'react';

import UserFormHeader from './user_form_header'
import PersonalInfo from './personal_info'
import Technologies from './technologies'
import ResumePhoto from './resume_photo'
import Locations from './locations'
import Benefits from './benefits'
import Salary from './salary'

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeComponentIdx: 0
    };
  }

  setActiveComponentIdx = (idx) => {
    this.setState({ activeComponentIdx: idx });
  }

  render() {
    const { activeComponentIdx } = this.state;
    const { updatePersonalData, updateResumeImageData,
            updateLocationsData, updateBenefitsData,
            updateTechsData, updateSalaryData } = this.props;

   let currentComponent
   switch (activeComponentIdx) {
     case 0:
       currentComponent = <PersonalInfo updatePersonalData={updatePersonalData} />
       break;
     case 1:
       currentComponent = <ResumePhoto updateResumeImageData={updateResumeImageData} />
       break;
     case 2:
       currentComponent = <Locations updateLocationsData={updateLocationsData} />
       break;
     case 3:
       currentComponent = <Technologies updateTechsData={updateTechsData} />
       break;
     case 4:
       currentComponent = <Benefits updateBenefitsData={updateBenefitsData} />
       break;
     case 5:
       currentComponent = <Salary updateSalaryData={updateSalaryData} />
       break;
     default:
      currentComponent = null
   }

    return (
      <div className="user-form">
        <UserFormHeader activeIdx={activeComponentIdx}
                        setIdx={this.setActiveComponentIdx} />
        { currentComponent }
      </div>
    );
  }
};
