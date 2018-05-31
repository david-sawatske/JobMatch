import React, { Component } from 'react';
import Select from 'react-select';

class Technologies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTechs: '',
      legalAuth: false
    };
  }

  handleLocationChange = newTech => {
    this.setState({ selectedTechs: newTech });
  }

  onClick = () => {
    this.props.updateTechsData(this.state)
  }

  render() {
    const { selectedTechs, legalAuth } = this.state;

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
        <h1>Technologies</h1>

        <Select
           name="form-field-name"
           value={selectedTechs}
           onChange={this.handleLocationChange}
           options={allTechs}
           multi={true}
         />

        <button onClick={this.onClick}>Techs Next</button>
      </div>
    );
  }
}

export default Technologies;
