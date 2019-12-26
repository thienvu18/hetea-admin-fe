import React from "react";
import { LineChart } from 'react-chartkick';
import 'chart.js';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = state => {
    const StatisticState = state.StatisticReducer;
    return {
        chart: StatisticState.chart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GetChartRequest: (data, token) => {
            dispatch(actions.GetChartRequest(data, token));
        }
    };
};

class ChartComponent extends React.Component {
    render() {
        return (
            <>
                <LineChart width="600px"
                    height="400px"
                    xtitle="Date" ytitle="Price"
                    data={this.props.chart} />
            </>
        );
    }
}

const ChartPage = connect(mapStateToProps, mapDispatchToProps)(ChartComponent);

export default ChartPage;
