import React, { Component } from 'react';

class SkillLevel extends Component {
  constructor(props) {
    super(props);

    this.state = {currLevel: ''};
  }

  componentDidMount() {
    const { currentSkill } = this.props;

    this.setState({ currLevel: currentSkill.level })
  }

  componentDidUpdate(prevProps) {
    const { currentSkill } = this.props;

    if (prevProps.currentSkill != this.props.currentSkill) {
      this.setState({ currLevel: currentSkill.level })
    }
  }

  onCompClick(level) {
    const { userId, currentSkill } = this.props;
    const { skillId, techId } = currentSkill;

    this.setState({ currLevel: level })

    this.props.updateSkillData({ [skillId]: { level: level,
                                              userId: userId,
                                              techId: techId }})
  }

  render() {
    const { currentSkill } = this.props;
    const { currLevel } = this.state;

    const competencies = [ "Familiarity (0-1 year of professional experience, needs mentorship)",
                       "Gaining Competency (1-3 years of professional experience, occasionally needs mentorship)",
                       "Individual Competency (3-5 years of professional experience, no longer needs daily mentorship)",
                       "Strong Competency (5+ years of professional experience, could mentor others)",
                       "Leadership (Expert competency + has lead or managed a team in this subject)" ]

    return (
      <div>
        <h1>How skilled are you with {currentSkill.techName}?</h1>
        <h2>STATE LEVEL {currLevel}</h2>
        <form>

          {competencies.map((comp, idx) => {
            return (
              <input type='radio'
                     name='level'
                     checked={idx === (currLevel - 1)}
                     onClick={() => this.onCompClick(idx + 1)} />
            )
          })}
        </form>
      </div>
    );
  }
}

export default SkillLevel;
