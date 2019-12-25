import { combineReducers } from 'redux';
import LoginReducer from './Login.reducer';
import UsersReducer from './Users.reducer';
import SkillsReducer from './Skills.reducer';
import ContractsReducer from './Contracts.reducer';


const myReducer = combineReducers({
  LoginReducer,
  UsersReducer,
  SkillsReducer,
  ContractsReducer
});
export default myReducer;
