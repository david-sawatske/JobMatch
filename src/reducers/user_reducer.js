import { combineReducers } from 'redux';

import { UPDATE_PERSONAL_DATA, UPDATE_RESUME_IMAGE_DATA, UPDATE_BENEFITS_DATA,
         UPDATE_LOCATIONS_DATA, UPDATE_TECHS_DATA } from '../actions/user_actions';

import { merge } from 'lodash';

const personalData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_PERSONAL_DATA:
      return merge({}, state, action.data);
    default:
      return state;
  }
};

const resumeImageData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_RESUME_IMAGE_DATA:
      return merge({}, state, action.data);
    default:
      return state;
  }
};

const locationsData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_LOCATIONS_DATA:
      return merge({}, state, action.data);
    default:
      return state;
  }
};

const techsData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_TECHS_DATA:
      return merge({}, state, action.data);
    default:
      return state;
  }
};

const benefitsData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_BENEFITS_DATA:
      return merge({}, state, action.data);
    default:
      return state;
  }
};

const UserReducer = combineReducers({
  resumeImageData,
  locationsData,
  benefitsData,
  personalData,
  techsData
});

export default UserReducer;
