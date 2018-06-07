import React, { Component } from 'react';

import request from 'superagent';

class ResumePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: null,
      resume: null,
      resumeName: null
    };
  }

  fileSelectHandler = (event, type) => {
    const file =  event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    const fileName = (type ==="resume") ? file.name : null;

    reader.onloadend = () => {
      this.setState({
        [type]: window.URL.createObjectURL(file),
        resumeName: fileName
      })
    }
  }

  onClick = () => {
    const { updateResumeImageData, setIdx } =  this.props;

    updateResumeImageData(this.state);

    setIdx();
  }

  render() {
    return (
      <div className='resume-photo'>
        <h2>Upload your CV & Profile picture</h2>

        <h4>Profile Image</h4>
        <label>
          Change Photo
          <input type='file' onChange={e => this.fileSelectHandler(e, 'imgUrl')}/>
        </label>

        <img src={this.state.imgUrl}/>

        <h4>Resume</h4>
        <label>
          Change Resume
          <input type='file' onChange={e => this.fileSelectHandler(e, 'resume')}/>
        </label>

        <h5>{this.state.resumeName}</h5>

        <button onClick={this.onClick}>
          Next
        </button>
      </div>
    );
  }

}

export default ResumePhoto;
