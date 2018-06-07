import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      github: '',
      linkedIn: ''
    }
  }

  update = field => (
     e => this.setState({
      [field]: e.currentTarget.value
    })
  )

  onClick = () => {
    const { updatePersonalData, setIdx } =  this.props;

    updatePersonalData(this.state);
    setIdx();
  }

  render() {
    return (
      <div className="personal-info">
        <form>
          <label>First Name</label>
          <br/>
          <input type="text" onChange={ this.update('first') }/>
          <br/>
          <label>Last Name</label>
          <br/>
          <input type="text" onChange={ this.update('last') }/>
          <br/>
          <label>GitHub Profile</label>
          <br/>
          <input type="text" onChange={ this.update('github') }/>
          <br/>
          <label>LinkedIn Profile</label>
          <br/>
          <input type="text" onChange={ this.update('linkedIn') }/>
        </form>

        <button onClick={this.onClick}>Next</button>
      </div>
    );
  }
}

export default PersonalInfo;
