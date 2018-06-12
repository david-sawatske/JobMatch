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

  setActiveComponentIdx = idx => {
    const newIdx = (idx || idx === 0) ? idx : (this.state.activeComponentIdx + 1)

    this.setState({ activeComponentIdx: newIdx });
  }

  render() {
    const { activeComponentIdx } = this.state;
    const { updatePersonalData, updateResumeImageData,
            updateLocationsData, updateBenefitsData,
            updateSalaryData, userData, techData,
            createSkillData } = this.props;

    const { personalData } = userData;
    const { techsById } = techData;

    let currentComponent
    switch (activeComponentIdx) {
     case 0:
       currentComponent = <PersonalInfo updatePersonalData={updatePersonalData}
                                        personalData={personalData}
                                        setIdx={this.setActiveComponentIdx} />
       break;
     case 1:
       currentComponent = <ResumePhoto updateResumeImageData={updateResumeImageData}
                                       setIdx={this.setActiveComponentIdx} />
       break;
     case 2:
       currentComponent = <Locations updateLocationsData={updateLocationsData}
                                     setIdx={this.setActiveComponentIdx} />
       break;
     case 3:
       currentComponent = <Technologies createSkillData={createSkillData}
                                        userId={personalData.id}
                                        techsById={techsById}
                                        setIdx={this.setActiveComponentIdx} />
       break;
     case 4:
       currentComponent = <Benefits updateBenefitsData={updateBenefitsData}
                                    setIdx={this.setActiveComponentIdx} />
       break;
     case 5:
       currentComponent = <Salary updateSalaryData={updateSalaryData}
                                  setIdx={this.setActiveComponentIdx} />
       break;
     default:
      currentComponent = null
    }

    return (
      <div className="user-form">
        <UserFormHeader activeIdx={activeComponentIdx}
                        setIdx={this.setActiveComponentIdx} />

        <div className="currentComponent">
          { currentComponent }
        </div>
      </div>
    );
  }
};
