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

    return (
      <div className='skill-index'>
        <SkillLevel setCurrentSkillIdx={this.setCurrentSkillIdx}
                    updateSkillData={updateSkillData}
                    currentSkill={currentSkill}
                    userId={userId} />

        {userSkillIds.map((skillId, idx) => {
          const currentSkill = userSkillsById[skillId];
          const techName = currentSkill.techName;
          const className = techName === currentTechName ? 'current-skill'
                                                             :
                                                           'skill';
          return (
            <h1 key={idx}
                className={className}
                onClick={(e) => this.setCurrentSkillIdx(e, idx)}>
              {techName}
            </h1>
          )
        })}
      </div>
    );
  }
}

export default SkillIndex;
