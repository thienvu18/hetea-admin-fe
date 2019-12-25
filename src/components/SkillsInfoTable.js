import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  const SkillsState = state.SkillsReducer;
  return {
    data: SkillsState.SkillsInfo,
    isUpdateSkill: SkillsState.isUpdateSkill
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetSkillsInfo: token => {
      dispatch(actions.GetSkillsInfoRequest(token));
    },
    UpdateSkillInfo: (data, token) => {
      dispatch(actions.UpdateSkillInfoRequest(data, token));
    },
    AddSkillInfo: (data, token) => {
      dispatch(actions.AddSkillInfoRequest(data, token));
    },
    DeleteSkillInfo: (data, token) => {
      dispatch(actions.DeleteSkillInfoRequest(data, token));
    }
  };
};

class SkillsInfoTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        title: 'Id',
        field: 'id',
        cellStyle: { display: 'none' },
        headerStyle: { display: 'none' }
      },
      { title: 'Skill', field: 'skill' },
      { title: 'Color', field: 'color' }
    ];
  }

  componentDidMount() {
    const UserCookie = cookie.load('token');
    this.props.GetSkillsInfo(UserCookie);
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
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                console.log(newData);
                st.AddSkillInfo(newData, UserCookie);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  st.UpdateSkillInfo(newData, UserCookie);
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                console.log(oldData);
                st.DeleteSkillInfo(oldData, UserCookie);
              }, 600);
            })
        }}
      />
    );
  }
}

const SkillsInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsInfoTable);

export default SkillsInfo;
