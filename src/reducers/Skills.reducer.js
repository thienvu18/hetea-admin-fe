import * as types from '../constants/constants';

const initialState = {
  SkillsInfo:[]
};


const SkillsInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getSkillsInfo: {
      const st = { ...state };
      try {
          st.SkillsInfo = action.data.res.data;
          console.log("Skill",st.SkillsInfo);
      } catch (err) {
        st.token = 'err';
      }
      console.log("state Skill", st);
      return st;
    }
    default:
      return state;
  }
};

export default SkillsInfoReducer;
