import { combineReducers } from 'redux';
import LoginReducer from './Login.reducer';
import UsersReducer from './Users.reducer';

const myReducer = combineReducers({
  LoginReducer,
  UsersReducer: UsersReducer
});
export default myReducer;
