import * as types from '../constants/constants';

const axios = require('axios');

function OnclickLogin(username, password) {
  var string = username + ':' + password; 
  console.log(string);
  var encodedString = btoa(string);
  const res = axios
    .post(
      `${types.stringConnect}/auth`,
      {
        access_token: 'DmPHDlGyAx3dzzx7Hsqbj3olNiwWWBUe'
      },
      {
        headers: { Authorization: `Basic ${encodedString}`  }
      }
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const Login = (username, password, res) => {
  return {
    type: types.login,
    data: { username, password, res }
  };
};

export const LoginRequest = (username, password) => {
  return dispatch => {
    return OnclickLogin(username, password).then(res => {
      dispatch(Login(username, password, res));
    });
  };
};
