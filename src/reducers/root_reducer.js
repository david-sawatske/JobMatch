import { combineReducers } from 'redux';

import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  userData: UserReducer
});

export default RootReducer;
