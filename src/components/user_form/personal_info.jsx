import React from 'react';

const PersonalInfo = ({ update }) => (
  <div>
    <form>
      <label>First Name</label>
      <input type="text" onChange={ update('first') }/>
      <br/>
      <label>Last Name</label>
      <input type="text" onChange={ update('last') }/>
      <br/>
      <label>GitHub Profile</label>
      <input type="text" onChange={ update('github') }/>
      <br/>
      <label>LinkedIn Profile</label>
      <input type="text" onChange={ update('linkedIn') }/>
    </form>
  </div>
);

export default PersonalInfo;
