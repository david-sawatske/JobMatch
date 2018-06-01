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
      { value: 0, label: 'Java' },
      { value: 1, label: 'Python' },
      { value: 3, label: 'C++' },
      { value: 4, label: 'JavaScript' },
      { value: 5, label: 'Ruby on Rails' },
      { value: 6, label: 'jQuery' },
      { value: 7, label: 'HTML' },
      { value: 8, label: 'CSS' },
      { value: 9, label: 'SQL' },
      { value: 10, label: 'React' },
      { value: 11, label: 'Node.js' },
      { value: 12, label: 'AngularJS' }
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
