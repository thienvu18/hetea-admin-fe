import { combineReducers } from 'redux';
import LoginReducer from './Login.reducer';
import UsersReducer from './Users.reducer';
import SkillsReducer from './Skills.reducer';


const myReducer = combineReducers({
  LoginReducer,
  UsersReducer,
  SkillsReducer,
});
export default myReducer;
