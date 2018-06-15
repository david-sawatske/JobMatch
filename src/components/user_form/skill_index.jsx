import React, { Component } from 'react';

import SkillLevel from './skill_level'

class SkillIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSkillIdx: 0
    }

    this.setCurrentSkillIdx = this.setCurrentSkillIdx.bind(this)
  }

  setCurrentSkillIdx(event, idx) {
    event.preventDefault()

    if (idx >= 0) {
      this.setState({ currentSkillIdx: idx })
    } else {
      const newIdx = (this.state.currentSkillIdx + 1)
      this.setState({ currentSkillIdx: newIdx })
    }
  }

  render() {
    const { userSkills, updateSkillData, userId } = this.props;
    const { userSkillsById, userSkillIds } = userSkills;
    const { currentSkillIdx } = this.state;

    const currentSkillId = userSkillIds[currentSkillIdx];
    const currentSkill = userSkillsById[currentSkillId];
    const currentTechName = currentSkill.techName;

    let CurrSkillLevel
    if ((currentSkillIdx + 1) === userSkillIds.length) {
      CurrSkillLevel = <div>REVIEW COMPONENT</div>
    } else {
      CurrSkillLevel = <SkillLevel setCurrentSkillIdx={this.setCurrentSkillIdx}
                                   updateSkillData={updateSkillData}
                                   currentSkill={currentSkill}
                                   userId={userId} />
    }

    return (
      <div className='skill-container'>
        { CurrSkillLevel }
        <div className='skill-index'>
          {userSkillIds.map((skillId, idx) => {
            const currentSkill = userSkillsById[skillId];
            const techName = currentSkill.techName;
            const className = techName === currentTechName ? 'current-skill'
                                                               :
                                                             'skill';
            return (
              <h3 key={idx}
                  className={className}
                  onClick={(e) => this.setCurrentSkillIdx(e, idx)}>
                {techName}
              </h3>
            )
          })}
        </div>
      </div>
    );
  }
}

export default SkillIndex;
