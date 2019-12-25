import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  const SkillsState = state.SkillsReducer;
  return {
    data: SkillsState.Contracts,
    isUpdateSkill: SkillsState.isUpdateSkill
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetContracts: token => {
      dispatch(actions.GetContractsRequest(token));
    },
    UpdateContract: (data, token) => {
      dispatch(actions.UpdateContractRequest(data, token));
    },
    DeleteContract: (data, token) => {
      dispatch(actions.DeleteContractRequest(data, token));
    }
  };
};

class ContractsTable extends React.Component {
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
      { title: 'Tutee', field: 'tutee' },
      { title: 'Hours', field: 'hours' },
      { title: 'Price', field: 'price' },
      { title: 'StartDate', field: 'startDate' },
      { title: 'EndDate', field: 'endDate' },
      { title: 'Status', field: 'status' },
    ];
  }

  componentDidMount() {
    const UserCookie = cookie.load('token');
    this.props.GetContracts(UserCookie);
  }

  render() {
    const st = this.props;
    const UserCookie = cookie.load('token');
    return (
      <MaterialTable
        title="Skills Infomation List"
        columns={this.columns}
        data={st.data}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  st.UpdateContract(newData, UserCookie);
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                console.log(oldData);
                st.DeleteContract(oldData, UserCookie);
              }, 600);
            })
        }}
      />
    );
  }
}

const Contracts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContractsTable);

export default Contracts;
