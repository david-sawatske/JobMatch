import React, { Component } from 'react';

class Salary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requiredSalary: null
    };
  }

  update = field => (
     e => this.setState({
      [field]: e.currentTarget.value
    })
  )

  onClick = () => {
    const { updateSalaryData } =  this.props;

    updateSalaryData(this.state)
  }

  render() {
    return (
      <div>
        <form>
          <label>Minimum Annual Salary</label>
          <input type="number" onChange={ this.update('requiredSalary') }/>
        </form>

        <button onClick={this.onClick}>Salary Next</button>
      </div>
    );
  }

}

export default Salary;
