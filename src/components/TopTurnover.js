import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// import cookie from 'react-cookies';

const mapStateToProps = state => {
  const StatisticState = state.StatisticReducer;
  return {
    tutor: StatisticState.tutor,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetTopTurnover: (data,token) => {
      dispatch(actions.GetTopTurnoverRequest(data,token));
    },
  };
};

class TopTurnoverTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        title: 'Id',
        field: 'id',
      },
      { title: 'Tutor', field: 'tutor' },
      { title: 'value', field: 'value' }
    ];
  }

    render() {
      const st = this.props;
      console.log(st.tutor);
    return (
      <MaterialTable
        title="Top sales by tutor"
        columns={this.columns}
        data={st.tutor}
      />
    );
  }
}

const TopTurnover = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTurnoverTable);

export default TopTurnover;
