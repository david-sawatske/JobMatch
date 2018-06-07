import React, { Component } from 'react';
import Select from 'react-select';

class Benefits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBenefits: ''
    };
  }

  handleBenefitChange = newBenefit => {
    this.setState({ selectedBenefits: newBenefit });
  }

  onClick = () => {
    const { updateBenefitsData, setIdx } = this.props;

    updateBenefitsData(this.state);
    setIdx();
  }

  render() {
    const { selectedBenefits } = this.state;

    const allBenefits = [
      { value: 0, label: '401(k)' },
      { value: 1, label: '100% Medical Insurance' },
      { value: 3, label: '80%+ Medical Insurance' },
      { value: 4, label: '60 Miles from Beach' },
      { value: 5, label: '60 Miles from Mountain' },
      { value: 6, label: 'Enviornmental Mission' },
      { value: 7, label: 'Remote' },
      { value: 8, label: 'Dental Insurance' },
      { value: 9, label: 'Vision Insurance' },
      { value: 10, label: '60 Day Parental Leave' },
      { value: 11, label: '30+ Day Parental Leave'  },
      { value: 12, label: 'Continuing Education Allowance' }
    ]

    return (
      <div className="benefits">
        <h2>Choose what's important in a role: </h2>
        <p>Note: You will <em>ONLY</em> see jobs with these benefits.</p>

        <Select
           name="form-field-name"
           value={selectedBenefits}
           onChange={this.handleBenefitChange}
           options={allBenefits}
           multi={true}
         />

        <button onClick={this.onClick}>Next</button>
      </div>
    );
  }
}

export default Benefits;
