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
    const { updateTechsData, setIdx } = this.props;

    updateTechsData(this.state);
    setIdx();
  }

  render() {
    const { selectedTechs } = this.state;
    const { techsById } = this.props;

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
