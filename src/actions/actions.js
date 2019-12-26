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

//============================================Update user info======================================================================
function OnclickUpdateUserInfo(data, token) {
  const res = axios
    .put(
      `${types.stringConnect}/users/${data.id}`,
      { name: data.name, picture: data.picture, isLock: data.isLock },
      {
        headers: { Authorization: `bearer ${token}` }
      }
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const UpdateUserInfo = (data, token, res) => {
  return {
    type: types.updateUserInfo,
    data: { token, res }
  };
};

export const UpdateUserInfoRequest = (data, token) => {
  return dispatch => {
    return OnclickUpdateUserInfo(data, token).then(res => {
      dispatch(UpdateUserInfo(data, token, res));
    });
  };
};

//================================================================Add admin=========================================================
function OnclickAddAdminInfo(data) {
  const res = axios
    .post(
      `${types.stringConnect}/users`,
      { access_token: 'DmPHDlGyAx3dzzx7Hsqbj3olNiwWWBUe', email: data.email, password: data.password, name: data.name, picture: data.picture, role: data.role },
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const AddAdminInfo = (data, res) => {
  return {
    type: types.addAdminInfo,
    data: { data, res }
  };
};

export const AddAdminInfoRequest = (data) => {
  return dispatch => {
    return OnclickAddAdminInfo(data).then(res => {
      dispatch(AddAdminInfo(data, res));
    });
  };
};
//====================================================================delete User=================================================================
function OnclickDeleteUserInfo(data, token) {
  const res = axios
    .delete(`${types.stringConnect}/users/${data.id}`, {
      headers: { Authorization: `bearer ${token}` }
    })
    .catch(error => {
      return error;
    });
  return res;
}

export const DeleteUserInfo = (data, token, res) => {
  return {
    type: types.deleteUserInfo,
    data: { data, token, res }
  };
};

export const DeleteUserInfoRequest = (data, token) => {
  return dispatch => {
    return OnclickDeleteUserInfo(data, token).then(res => {
      dispatch(DeleteUserInfo(data, token, res));
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
    .delete(`${types.stringConnect}/Skills/${data.id}`, {
      headers: { Authorization: `bearer ${token}` }
    })
    .catch(error => {
      return error;
    });
  return res;
}

export const DeleteSkillInfo = (data, token, res) => {
  return {
    type: types.deleteSkillInfo,
    data: { data, token, res }
  };
};

export const DeleteSkillInfoRequest = (data, token) => {
  return dispatch => {
    return OnclickDeleteSkillInfo(data, token).then(res => {
      dispatch(DeleteSkillInfo(data, token, res));
    });
  };
};

//==========================================================================clear value========================================================
export const ClearValueErrInUser = () => {
  return {
    type: types.clearValueErrInUser
  }
};

//==========================================================================logout==========================================================
export const Logout = () => {
  return {
    type: types.logout
  }
};

//===========================================================get skills info=======================================================================
function OnclickGetContracts(token) {
  const res = axios
    .get(`${types.stringConnect}/Contracts`, {
      headers: { Authorization: `bearer ${token}` }
    })
    .catch(error => {
      return error;
    });
  return res;
}

export const GetContracts = (token, res) => {
  return {
    type: types.getContracts,
    data: { token, res }
  };
};

export const GetContractsRequest = token => {
  return dispatch => {
    return OnclickGetContracts(token).then(res => {
      dispatch(GetContracts(token, res));
    });
  };
};

//============================================Update Contract info======================================================================
function OnclickUpdateContract(data, token) {
  const startDate = new Date(data.startDate).toISOString();
  const endDate = new Date(data.endDate).toISOString();;
  const res = axios
    .put(
      `${types.stringConnect}/contracts/${data.id}`,
      {
        access_token: token, tutor: data.tutor,
        tutee: data.tutee, hours: data.hours,
        price: data.price, startDate: startDate,
        endDate: endDate, status: data.status
      }
    )
    .catch(error => {
      return error;
    });
  return res;
}

export const UpdateContract = (data, token, res) => {
  return {
    type: types.updateContract,
    data: { token, res }
  };
};

export const UpdateContractRequest = (data, token) => {
  return dispatch => {
    return OnclickUpdateContract(data, token).then(res => {
      dispatch(UpdateContract(data, token, res));
    });
  };
};

//====================================================================delete Contract=================================================================
function OnclickDeleteContract(data, token) {
  const res = axios
    .delete(`${types.stringConnect}/contracts/${data.id}`, {
      headers: { Authorization: `bearer ${token}` }
    })
    .catch(error => {
      return error;
    });
  return res;
}

export const DeleteContract = (data, token, res) => {
  return {
    type: types.deleteContract,
    data: { data, token, res }
  };
};

export const DeleteContractRequest = (data, token) => {
  return dispatch => {
    return OnclickDeleteContract(data, token).then(res => {
      dispatch(DeleteContract(data, token, res));
    });
  };
};


//====================================================================get top turnover=================================================================
function OnclickGetTopTurnover(data, token) {
  const res = axios
    .get(`${types.stringConnect}/statistics/toptutorrevenue`,
      {
        headers: { Authorization: `bearer ${token}` },
        params: {
          startDate: data.startDate,
          endDate: data.endDate,
          unit: data.unit
        }
      })
    .catch(error => {
      return error;
    });
  return res;
}

export const GetTopTurnover = (data, token, res) => {
  return {
    type: types.getTopTurnover,
    data: { data, token, res }
  };
};

export const GetTopTurnoverRequest = (data, token) => {
  return dispatch => {
    return OnclickGetTopTurnover(data, token).then(res => {
      dispatch(GetTopTurnover(data, token, res));
    });
  };
};

//====================================================================get chart=================================================================
function OnclickGetChart(data, token) {
  const res = axios
    .get(`${types.stringConnect}/statistics/revenue`,
      {
        headers: { Authorization: `bearer ${token}` },
        params: {
          startDate: data.startDate,
          endDate: data.endDate,
          unit: data.unit
        }
      })
    .catch(error => {
      return error;
    });
  return res;
}

export const GetChart = (data, token, res) => {
  return {
    type: types.getChart,
    data: { data, token, res }
  };
};

export const GetChartRequest = (data, token) => {
  return dispatch => {
    return OnclickGetChart(data, token).then(res => {
      dispatch(GetChart(data, token, res));
    });
  };
};


