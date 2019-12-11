import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  const SkillsState = state.SkillsReducer;
  return {
    data: SkillsState.SkillsInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetSkillsInfo: (token) => {
      dispatch(actions.GetSkillsInfoRequest(token));
    }
  };
};

class SkillsInfoTable extends React.Component {
  constructor() {
    super();
    this.columns = [
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
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
      />
    );
  }
}

const SkillsInfo = connect(mapStateToProps, mapDispatchToProps)(SkillsInfoTable);

export default SkillsInfo;
