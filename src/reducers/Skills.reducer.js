import * as types from '../constants/constants';

const initialState = {
  SkillsInfo: [],
  isUpdateSkill: ''
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
      let st=JSON.parse(JSON.stringify(state))
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
        for (var i = 0; i < st.SkillsInfo.length; i++) {
          if (st.SkillsInfo[i].id === res.id) {
            st.SkillsInfo[i] = JSON.parse(JSON.stringify(res));
          }
        }
      } catch (err) { }
      return st;
    }
    case types.deleteSkillInfo: {
      let st=JSON.parse(JSON.stringify(state))
      try {
        // st.SkillsInfo.splice(st.SkillsInfo.findIndex(v => v.id === res.id), 1);
        st.SkillsInfo = st.SkillsInfo.filter(person => person.id !== action.data.data.id);
      } catch (err) { }
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
