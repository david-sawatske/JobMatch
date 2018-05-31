import { combineReducers } from 'redux';

import { UPDATE_PERSONAL_DATA, UPDATE_RESUME_IMAGE_DATA,
         UPDATE_LOCATIONS_DATA, UPDATE_TECHS_DATA,
         UPDATE_SALARY_DATA, UPDATE_BENEFITS_DATA } from '../actions/user_actions';

import { merge, union } from 'lodash';

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

const userTechIds = (state = [], action) => {
  switch(action.type) {
    case UPDATE_TECHS_DATA:
      return merge([], state, getTechIds(action.data));
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

const salaryData = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_SALARY_DATA:
      return merge({}, state, action.data.byId);
    default:
      return state;
  }
};

// START selectors //
const getTechIds = obj => {
  let allIds = [];

  Object.values(obj.selectedTechs).map(tech => {
    allIds = union([], allIds, [tech.value]);
  })

  return allIds
}
// END selectors //

const UserReducer = combineReducers({
  resumeImageData,
  locationsData,
  benefitsData,
  personalData,
  salaryData,
  userTechIds
});

export default UserReducer;
