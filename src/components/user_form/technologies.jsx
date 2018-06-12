import React, { Component } from 'react';
import Select from 'react-select';

class Technologies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTechs: ''
    };
  }

  handleTechChange = newTech => {
    this.setState({ selectedTechs: newTech });
  }

  onClick = () => {
    const { createSkillData, setIdx, userId } = this.props;
    const { selectedTechs } = this.state;

    const userTechs = {};
    Object.values(selectedTechs).map((tech, idx) => {
      userTechs[idx] = { userId, techId: tech.value, level: 1 }
    })

    createSkillData(userTechs);
    setIdx();
  }

  render() {
    const { selectedTechs } = this.state;
    const { techsById, userId } = this.props;
    const allTechs = Object.values(techsById)

    return (
      <div className="technologies">
        <h2>What skills do you bring to the table?</h2>
        <p>Add your top five skills from below.</p>

        <Select
           name="form-field-name"
           value={selectedTechs}
           onChange={this.handleTechChange}
           options={allTechs}
           multi={true}
         />

        <button onClick={this.onClick}>Next</button>
      </div>
    );
  }
}

export default Technologies;
