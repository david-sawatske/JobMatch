import React, { Component } from 'react';

import SkillLevel from './skill_level'

class SkillIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSkillIdx: 0
    }

    this.setCurrentSkillId = this.setCurrentSkillId.bind(this)
  }

  handleTechClick = idx => {
    this.setState({ currentSkillIdx: idx });
  }

  setCurrentSkillId(event, idx) {
    event.preventDefault()

    this.setState({ currentSkillIdx: idx })
  }

  render() {
    const { userSkills, updateSkillData, userId } = this.props;
    const { userSkillsById, userSkillIds } = userSkills;
    const { currentSkillIdx } = this.state;

    const currentSkillId = userSkillIds[currentSkillIdx];
    const currentSkill = userSkillsById[currentSkillId];
    const currentTechName = (currentSkill) ? currentSkill.techName : null;

    return (
      <div className='skill-index'>
        <SkillLevel updateSkillData={updateSkillData}
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
                onClick={() => this.handleTechClick(idx)}>
              {techName}
            </h1>
          )
        })}
      </div>
    );
  }
}

export default SkillIndex;
