import React, { Component } from 'react';

import request from 'superagent';

class ResumePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: null,
      resume: null,
    };
  }

  fileSelectHandler = (event, type) => {
    const file =  event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.setState({
        [type]: window.URL.createObjectURL(file)
      })
    }
  }

  onClick = () => {
    const { updateResumeImageData } =  this.props;

    this.props.updateResumeImageData(this.state)
  }

  render() {
    return (
      <div className='resume-photo'>
        <label>Profile Image</label>
        <input type='file' onChange={ e => this.fileSelectHandler(e, 'imgUrl') }/>
        <img src={this.state.imgUrl}/>

        <input type='file' onChange={ e => this.fileSelectHandler(e, 'resume') }/>

         <button onClick={this.onClick}>
           Next
         </button>
      </div>
    );
  }

}

export default ResumePhoto;
