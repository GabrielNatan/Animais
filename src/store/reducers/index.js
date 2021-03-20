import { menuReducer } from './menuReducer';
import { combineReducers } from 'redux';
export const Reducers = combineReducers({
  menu: menuReducer,
});