import React, { Component } from 'react';

import UserFormHeader from './user_form_header'
import PersonalInfo from './personal_info'
import Technologies from './technologies'
import ResumePhoto from './resume_photo'
import SkillIndex from './skill_index_container'
import Locations from './locations'
import Benefits from './benefits'
import Salary from './salary'

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeComponentIdx: 6
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
            updateSalaryData, userData, techData, createSkillData } = this.props;

    const { techsById } = techData;
    const { personalData } = userData;

    let CurrentComponent
    let FormHeader = <UserFormHeader activeIdx={activeComponentIdx}
                                     setIdx={this.setActiveComponentIdx} />

    switch (activeComponentIdx) {
     case 0:
       CurrentComponent = <PersonalInfo updatePersonalData={updatePersonalData}
                                        personalData={personalData}
                                        setIdx={this.setActiveComponentIdx} />
       break;
     case 1:
       CurrentComponent = <ResumePhoto updateResumeImageData={updateResumeImageData}
                                       setIdx={this.setActiveComponentIdx} />
       break;
     case 2:
       CurrentComponent = <Locations updateLocationsData={updateLocationsData}
                                     setIdx={this.setActiveComponentIdx} />
       break;
     case 3:
       CurrentComponent = <Technologies createSkillData={createSkillData}
                                        userId={personalData.id}
                                        techsById={techsById}
                                        setIdx={this.setActiveComponentIdx} />
       break;
     case 4:
       CurrentComponent = <Benefits updateBenefitsData={updateBenefitsData}
                                    setIdx={this.setActiveComponentIdx} />
       break;
     case 5:
       CurrentComponent = <Salary updateSalaryData={updateSalaryData}
                                  setIdx={this.setActiveComponentIdx} />
       break;
     case 6:
       FormHeader = null;
       CurrentComponent = <SkillIndex />;

       break;
     default:
      CurrentComponent = null
    }

    return (
      <div className="user-form">
        { FormHeader }

        <div className="currentComponent">
          { CurrentComponent }
        </div>
      </div>
    );
  }
};
