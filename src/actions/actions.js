import * as types from '../constants/constants';

const axios = require('axios');

//=============================================================login=====================================================================
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

//=========================================================get users info==================================================================
function OnclickGetUsersInfo(token) {

  const res = axios
    .get(`${types.stringConnect}/users`, {
      headers: { Authorization: `bearer ${token}` }
    })
    .catch(error => {
      return error;
    });
  return res;
}

export const GetUsersInfo = (token, res) => {
  console.log("res",res);
  return {
    type: types.getUsersInfo,
    data: { token, res }
  };
};

export const GetUsersInfoRequest = (token) => {
  return dispatch => {
    return OnclickGetUsersInfo(token).then(res => {
      dispatch(GetUsersInfo(token, res));
    });
  };
};
