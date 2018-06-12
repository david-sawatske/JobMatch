import { combineReducers } from 'redux';

import { UPDATE_SKILL_DATA, CREATE_SKILL_DATA } from '../actions/skill_actions';

import { merge, union } from 'lodash';

const skillsById = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_SKILL_DATA:
    case CREATE_SKILL_DATA:
      return merge({}, state, getSkillsData(action.data).byId);
    default:
      return state;
  }
};

const allSkillIds = (state = [], action) => {
  switch(action.type) {
    case UPDATE_SKILL_DATA:
    case CREATE_SKILL_DATA:
      return union([], state, getSkillsData(action.data).allIds);
    default:
      return state;
  }
};

// START selectors //
const getSkillsData = obj => {
  let byId = {};
  let allIds = [];

  Object.values(obj).map(skill => {
    const skillId = Number(skill.userId.toString() + skill.techId);

    byId[skillId] = skill;
    allIds.push(skillId);
  })

  return { byId: byId, allIds: allIds }
}
// END selectors //

const SkillsReducer = combineReducers({
  allSkillIds,
  skillsById
});

export default SkillsReducer;
