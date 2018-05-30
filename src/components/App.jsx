import React, { Component } from 'react';
import PersonalInfo from './user_form/personal_info'

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      github: '',
      linkedIn: ''
    }

    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="App">
        <PersonalInfo update={this.update} />
      </div>
    );
  }
}
