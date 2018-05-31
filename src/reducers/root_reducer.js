import { combineReducers } from 'redux';

import UserReducer from './user_reducer';
import TechnologiesReducer from './technologies_reducer';

const RootReducer = combineReducers({
  technologiesData: TechnologiesReducer,
  userData: UserReducer
});

export default RootReducer;
