import * as types from '../constants/constants';

const initialState = {
  usersInfo: [],
  admin: [],
  isCreate: ''
};


const UsersInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getUsersInfo: {
      let st = JSON.parse(JSON.stringify(state));
      try {
        st.usersInfo = action.data.res.data;
        st.usersInfo = st.usersInfo.filter(user => user.role === 'user');
      } catch (err) {
      }
      console.log(st);
      return st;
    }
    case types.updateUserInfo: {
      let st = JSON.parse(JSON.stringify(state));
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
        for (var i = 0; i < st.usersInfo.length; i++) {
          if (st.usersInfo[i].id === res.id) {
            st.usersInfo[i] = JSON.parse(JSON.stringify(res));
          }
        }
      } catch (err) { }
      return st;
    }
    case types.deleteUserInfo: {
      let st = JSON.parse(JSON.stringify(state))
      try {
        // st.usersInfo.splice(st.usersInfo.findIndex(v => v.id === res.id), 1);
        st.usersInfo = st.usersInfo.filter(person => person.id !== action.data.data.id);
      } catch (err) { }
      return st;
    }
    case types.addAdminInfo: {
      let st = JSON.parse(JSON.stringify(state));
      console.log(action.data.res.request.status);
      if (action.data.res.request.status === 201) {
        st.isCreate = "Create Account Success";
      }
      else if (action.data.res.request.status === 409) {
        st.isCreate = "Email already exists";
      }
      else {
        st.isCreate = "There was an error, please try again";
      }
      return st;
    }
    case types.clearValueErrInUser: {
      let st = JSON.parse(JSON.stringify(state))
      st.isCreate = '';
      return st;
    }
    default:
      return state;
  }
};

export default UsersInfoReducer;
