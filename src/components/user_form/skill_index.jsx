import React, { Component } from 'react';

import SkillLevel from './skill_level'

class SkillIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSkillId: ''
    }

    this.setCurrentSkillId = this.setCurrentSkillId.bind(this)
  }

  componentDidMount() {
    const defaultSkillId = Object.keys(this.props.userSkills)[0]

    this.setState({ currentSkillId: defaultSkillId })
  }

  handleTechClick = id => {
    this.setState({ currentSkillId: id });
  }

  setCurrentSkillId(event, id) {
    event.preventDefault()

    this.setState({ currentSkillId: id })
  }

  render() {
    const { userSkills, updateSkillData, userId } = this.props;

    const { currentSkillId } = this.state;

    const currentSkill = (currentSkillId) ? userSkills[currentSkillId] : {};
    const currentTechName = currentSkill.techName;

    let currSkillComponent
    if (currentTechName) {
      console.log("CURR SKILL", currentSkill);
      currSkillComponent = <SkillLevel updateSkillData={updateSkillData}
                                       currentSkill={currentSkill}
                                       userId={userId} />
    }
    return (
      <div className='skill-index'>
        { currSkillComponent }

        {Object.keys(userSkills).map((skillId, idx) => {
          const currentSkill = userSkills[skillId];
          const { level, techName } = currentSkill;
          const className = techName === currentTechName ? 'current-skill' : 'skill'

          return (
            <h1 key={idx}
                className={className}
                onClick={() => this.handleTechClick(skillId)}>
              {currentSkill.techName}
            </h1>
          )
        })}
      </div>
    );
  }
}

export default SkillIndex;
