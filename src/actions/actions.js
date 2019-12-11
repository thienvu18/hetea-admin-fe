import * as types from '../constants/constants';

const axios = require('axios');

//=============================================================login=====================================================================
function OnclickLogin(username, password) {
  var string = username + ':' + password;
  var encodedString = btoa(string);
  const res = axios
    .post(
      `${types.stringConnect}/auth`,
      {
        access_token: 'DmPHDlGyAx3dzzx7Hsqbj3olNiwWWBUe'
      },
      {
        headers: { Authorization: `Basic ${encodedString}` }
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
  return {
    type: types.getUsersInfo,
    data: { token, res }
  };
};

export const GetUsersInfoRequest = token => {
  return dispatch => {
    return OnclickGetUsersInfo(token).then(res => {
      dispatch(GetUsersInfo(token, res));
    });
  };
};

//===========================================================get skills info=======================================================================
function OnclickGetSkillsInfo(token) {
  const res = axios
    .get(`${types.stringConnect}/Skills`, {
      headers: { Authorization: `bearer ${token}` }
    })
    .catch(error => {
      return error;
    });
  return res;
}

export const GetSkillsInfo = (token, res) => {
  return {
    type: types.getSkillsInfo,
    data: { token, res }
  };
};

export const GetSkillsInfoRequest = token => {
  return dispatch => {
    return OnclickGetSkillsInfo(token).then(res => {
      dispatch(GetSkillsInfo(token, res));
    });
  };
};

//============================================Update skill info======================================================================
function OnclickUpdateSkillInfo(data, token) {
  const res = axios
    .put(
      `${types.stringConnect}/Skills/${data.id}`,
      { skill: data.skill, color: data.color },
      {
        headers: { Authorization: `bearer ${token}` }
      }
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const UpdateSkillInfo = (data, token, res) => {
  return {
    type: types.updateSkillInfo,
    data: { token, res }
  };
};

export const UpdateSkillInfoRequest = (data, token) => {
  return dispatch => {
    return OnclickUpdateSkillInfo(data, token).then(res => {
      dispatch(UpdateSkillInfo(data, token, res));
    });
  };
};

//==============================================================Add Skill==================================================================
function OnclickAddSkillInfo(data, token) {
  const res = axios
    .post(
      `${types.stringConnect}/Skills`,
      { skill: data.skill, color: data.color },
      {
        headers: { Authorization: `bearer ${token}` }
      }
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const AddSkillInfo = (data, token, res) => {
  return {
    type: types.addSkillInfo,
    data: { token, res }
  };
};

export const AddSkillInfoRequest = (data, token) => {
  return dispatch => {
    return OnclickAddSkillInfo(data, token).then(res => {
      dispatch(AddSkillInfo(data, token, res));
    });
  };
};

//====================================================================delete skill=================================================================
function OnclickDeleteSkillInfo(data, token) {
  const res = axios
    .delete(
      `${types.stringConnect}/Skills/${data.id}`,
      {
        headers: { Authorization: `bearer ${token}` }
      }
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const DeleteSkillInfo = (data, token, res) => {
  return {
    type: types.deleteSkillInfo,
    data: { token, res }
  };
};

export const DeleteSkillInfoRequest = (data, token) => {
  return dispatch => {
    return OnclickDeleteSkillInfo(data, token).then(res => {
      dispatch(DeleteSkillInfo(data, token, res));
    });
  };
};
