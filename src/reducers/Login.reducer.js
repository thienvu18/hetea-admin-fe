import * as types from '../constants/constants';
import cookie from 'react-cookies';

const initialState = {
  token: '',
  username: '',
  password: '',
  id: '',
  name: '',
  picture: ''
};

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      const st = { ...state };
      st.username = action.data.username;
      st.password = action.data.password;
      try {
        st.id = action.data.res.data.user.id;
        st.token = action.data.res.data.token;
        st.name = action.data.res.data.user.name;
        st.image = action.data.res.data.user.picture;
        setCookie('token', action.data.res.data.token, 7);
      } catch (err) {
      }
      console.log("state", st);
      return st;
    }
    case types.logout: {
      let st = JSON.parse(JSON.stringify(state))
      st.username = '';
      st.password = '';
      st.id = '';
      st.token = '';
      st.name = '';
      st.image = '';
      cookie.remove('token', { path: '/' });
      return st;
    }
    default:
      return state;
  }
};

export default LoginReducer;
