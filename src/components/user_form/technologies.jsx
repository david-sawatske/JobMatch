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

    const allTechs = [
      { value: 0, label: 'Java', skillLevel: 1 },
      { value: 1, label: 'Python', skillLevel: 1 },
      { value: 3, label: 'C++', skillLevel: 1 },
      { value: 4, label: 'JavaScript', skillLevel: 1 },
      { value: 5, label: 'Ruby on Rails', skillLevel: 1 },
      { value: 6, label: 'jQuery', skillLevel: 1 },
      { value: 7, label: 'HTML', skillLevel: 1 },
      { value: 8, label: 'CSS', skillLevel: 1 },
      { value: 9, label: 'SQL', skillLevel: 1 },
      { value: 10, label: 'React', skillLevel: 1 },
      { value: 11, label: 'Node.js', skillLevel: 1 },
      { value: 12, label: 'AngularJS', skillLevel: 1 }
    ]

    return (
      <div>
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
