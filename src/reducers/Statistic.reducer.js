import * as types from '../constants/constants';

const initialState = {
    chart: [],
    tutor:[]
};

const ChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.getChart: {
            const st = { ...state };
            try {
                st.chart = action.data.res.data;
            } catch (err) { }
            return st;
        }
        case types.getTopTurnover: {
            const st = { ...state };
            try {
                st.tutor = action.data.res.data;
            } catch (err) { }
            return st;
        }
        default:
            return state;
    }
};

export default ChartReducer;
