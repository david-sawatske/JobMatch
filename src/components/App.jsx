import React, { Component } from 'react';

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
        <form>
          <label>First Name</label>
          <input type="text" value={this.state.first} onChange={this.update('first')}/>
          <br/>
          <label>Lase Name</label>
          <input type="text" value={this.state.last} onChange={this.update('last')}/>
          <br/>
          <label>GitHub Profile</label>
          <input type="text" value={this.state.github} onChange={this.update('github')}/>
          <br/>
          <label>LinkedIn Profile</label>
          <input type="text" value={this.state.linkedIn} onChange={this.update('linkedIn')}/>
        </form>
      </div>
    );
  }
}
