import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Login from '../components/Login';

const mapStateToProps = state => {
  const LoginState = state.LoginReducer;
  return {
    username: LoginState.username,
    password: LoginState.password,
    token: LoginState.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Login: (username, password) => {
      dispatch(actions.LoginRequest(username, password));
    }
  };
};
const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginPage;
