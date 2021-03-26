import { menuReducer } from './menuReducer';
import { loggedUserReducer } from './loggedUserReducers';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  menu: menuReducer, 
  loggedUser:loggedUserReducer
});