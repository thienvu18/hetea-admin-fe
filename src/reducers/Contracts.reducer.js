import * as types from '../constants/constants';

const initialState = {
  Contracts: [],
  isUpdateContract: ''
};

const ContractsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getContracts: {
      let st=JSON.parse(JSON.stringify(state))
      try {
        st.Contracts = action.data.res.data.rows;
      } catch (err) {}
      console.log("get Contract", st);
      return st;
    }
    case types.updateContract: {
      let st=JSON.parse(JSON.stringify(state))
      try {
        // eslint-disable-next-line no-unused-vars
        const res = action.data.res.data;
        for (var i = 0; i < st.Contracts.length; i++) {
          if (st.Contracts[i].id === res.id) {
            st.Contracts[i] = JSON.parse(JSON.stringify(res));
          }
        }
      } catch (err) { }
      return st;
    }
    case types.deleteContract: {
      let st=JSON.parse(JSON.stringify(state))
      try {
        // st.Contracts.splice(st.Contracts.findIndex(v => v.id === res.id), 1);
        st.Contracts = st.Contracts.filter(person => person.id !== action.data.data.id);
      } catch (err) { }
      return st;
    }
    default:
      return state;
  }
};

export default ContractsReducer;
