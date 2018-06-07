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
    const { updateSalaryData, setIdx } =  this.props;

    updateSalaryData(this.state);
    setIdx();
  }

  render() {
    return (
      <div className="salary">
        <h2>What is the minimum <em>ANNUAL</em> salary you would consider?</h2>
        <p>No one, not the recruiter and not the company, will see this number. It's only for job-filtering purposes.</p>
        <p>If you're open to any salary, just leave it blank.</p>

        <form>
          <label>$ </label>
          <input type="number" onChange={ this.update('requiredSalary') }/>
          <label> / per year</label>
        </form>

        <button onClick={this.onClick}>Submit</button>
      </div>
    );
  }

}

export default Salary;
