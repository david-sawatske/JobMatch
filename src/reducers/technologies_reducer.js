import { combineReducers } from 'redux';

import { UPDATE_TECHS_DATA } from '../actions/user_actions';

import { merge, union } from 'lodash';

const techsById = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_TECHS_DATA:
      return merge({}, state, getTechsData(action.data).byId);
    default:
      return state;
  }
};

const allTechIds = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_TECHS_DATA:
    console.log(getTechsData(action.data).allIds);

      return union([], state, getTechsData(action.data).allIds);
    default:
      return state;
  }
};

// START selectors //
const getTechsData = obj => {
  let byId = {};
  let allIds = [];

  Object.values(obj.selectedTechs).map(tech => {
    const techId = tech.value;

    byId = merge({}, byId, {[techId]: tech.label });
    allIds = union([], allIds, [techId]);
  })

  return { byId: byId, allIds: allIds }
}
// END selectors //

const TechnologiesReducer = combineReducers({
  allTechIds,
  techsById
});

export default TechnologiesReducer;
