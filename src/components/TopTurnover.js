import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  const SkillsState = state.SkillsReducer;
  return {
    data: SkillsState.TopTurnover,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetTopTurnover: token => {
      dispatch(actions.GetTopTurnoverRequest(token));
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
        cellStyle: { display: 'none' },
        headerStyle: { display: 'none' }
      },
      { title: 'Tutor', field: 'tutor' },
      { title: 'Price', field: 'price' }
    ];
  }

  componentDidMount() {
    const UserCookie = cookie.load('token');
    // this.props.GetTopTurnover(UserCookie);
  }

    render() {
        const st = this.props;
    return (
      <MaterialTable
        title="Top sales by tutor"
        columns={this.columns}
        data={st.data}
      />
    );
  }
}

const TopTurnover = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTurnoverTable);

export default TopTurnover;
