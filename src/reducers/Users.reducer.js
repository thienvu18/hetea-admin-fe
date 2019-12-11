import * as types from '../constants/constants';

const initialState = {
  usersInfo:[]
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
    default:
      return state;
  }
};

export default UsersInfoReducer;
