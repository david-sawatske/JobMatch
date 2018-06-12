import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      github: '',
      linkedIn: '',
      id: ''
    }
  }

  componentDidMount() {
    const personalData = this.props.personalData;

    if (!personalData.id) {
      this.setState({ id: Date.now() })
    } else {
      this.setState({ ...personalData })
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
    const { first, last, linkedIn, github } = this.state;

    return (
      <div className="personal-info">
        <form>
          <label>First Name</label>
          <br/>
          <input type="text"
                 value={first}
                 onChange={ this.update('first') }/>
          <br/>
          <label>Last Name</label>
          <br/>
          <input type="text"
                 value={last}
                 onChange={ this.update('last') }/>
          <br/>
          <label>GitHub Profile</label>
          <br/>
          <input type="text"
                 value={github}
                 onChange={ this.update('github') }/>
          <br/>
          <label>LinkedIn Profile</label>
          <br/>
          <input type="text"
                 value={linkedIn}
                 onChange={ this.update('linkedIn') }/>
        </form>

        <button onClick={this.onClick}>Next</button>
      </div>
    );
  }
}

export default PersonalInfo;
