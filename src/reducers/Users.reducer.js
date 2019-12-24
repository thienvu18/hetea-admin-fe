import * as types from '../constants/constants';

const initialState = {
  usersInfo: [],
  isUpdateUser: ''
};


const UsersInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getUsersInfo: {
      const st = { ...state };
      try {
          st.usersInfo = action.data.res.data;
          console.log("user",st.usersInfo);
      } catch (err) {
      }
      console.log("state user", st);
      return st;
    }
    case types.updateUserInfo: {
      const st = { ...state };
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
        
      } catch (err) {}
      return st;
    }
    case types.deleteUserInfo: {
      const st = { ...state };
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
      } catch (err) {}
      return st;
    }
    case types.addUserInfo: {
      const UsersInfo = [...state.UsersInfo];
      try {
        UsersInfo.push(action.data.res.data);
      } catch (err) {}
      console.log('User add', UsersInfo);
      return { ...state, UsersInfo };
    }
    default:
      return state;
  }
};

export default UsersInfoReducer;
