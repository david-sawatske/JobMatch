import { combineReducers } from 'redux';

import { merge, union } from 'lodash';

const defaultById = {
  0: { value: 0, label: 'Java' },
  1: { value: 1, label: 'Python' },
  3: { value: 3, label: 'C++' },
  4: { value: 4, label: 'JavaScript' },
  5: { value: 5, label: 'Ruby on Rails' },
  6: { value: 6, label: 'jQuery' },
  7: { value: 7, label: 'HTML' },
  8: { value: 8, label: 'CSS' },
  9: { value: 9, label: 'SQL' },
  10: { value: 10, label: 'React' },
  11: { value: 11, label: 'Node.js' },
  12: { value: 12, label: 'AngularJS' }
}

const defaultIds = [...Array(13).keys()]

const techsById = (state = defaultById, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const allTechIds = (state = defaultIds, action) => {
  switch(action.type) {
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
