import * as types from '../constants/constants';

const initialState = {
  SkillsInfo: [],
  isUpdateskill: ''
};

const SkillsInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getSkillsInfo: {
      const st = { ...state };
      try {
        st.SkillsInfo = action.data.res.data.rows;
      } catch (err) {}
      return st;
    }
    case types.updateSkillInfo: {
      const st = { ...state };
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
      } catch (err) {}
      return st;
    }
    case types.deleteSkillInfo: {
      const st = { ...state };
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
      } catch (err) {}
      return st;
    }
    case types.addSkillInfo: {
      const SkillsInfo = [...state.SkillsInfo];
      try {
        SkillsInfo.push(action.data.res.data);
      } catch (err) {}
      console.log('Skill add', SkillsInfo);
      return { ...state, SkillsInfo };
    }
    default:
      return state;
  }
};

export default SkillsInfoReducer;
