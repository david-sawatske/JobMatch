import { combineReducers } from 'redux';

import UserReducer from './user_reducer';
import SkillsReducer from './skill_reducer';
import TechnologiesReducer from './technologies_reducer';

const RootReducer = combineReducers({
  technologiesData: TechnologiesReducer,
  skillsData: SkillsReducer,
  userData: UserReducer
});

export default RootReducer;
