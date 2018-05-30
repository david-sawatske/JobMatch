import React, { Component } from 'react';
import Select from 'react-select';

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLocations: '',
      legalAuth: false
    };
  }

  handleLocationChange = newLocation => {
    this.setState({ selectedLocations: newLocation });
  }

  handleLegalChange = () => {
    this.setState({ legalAuth: !this.state.legalAuth });
  }

  onClick = () => {
    this.props.updateLocationsData(this.state)
  }

  render() {
    const { selectedLocations, legalAuth } = this.state;

    const allLocations = [
      { value: 0, label: 'San Francisco Bay Area' },
      { value: 1, label: 'Austin, TX Area' },
      { value: 2, label: 'Portland, OR Area' },
      { value: 3, label: 'Seattle, WA Area' }
    ]

    return (
      <div>
        <h1>Locations</h1>

        <Select
           name="form-field-name"
           value={selectedLocations}
           onChange={this.handleLocationChange}
           options={allLocations}
           multi={true}
         />

         <input
           type="checkbox"
           checked={this.state.legalAuth}
           onChange={this.handleLegalChange} />

        <button onClick={this.onClick}>Personal Next</button>
      </div>
    );
  }
}

export default Locations;
