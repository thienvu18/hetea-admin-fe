import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  const UsersState = state.UsersReducer;
  return {
    data: UsersState.usersInfo,
    isUpdateUser: UsersState.isUpdateUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetUsersInfo: token => {
      dispatch(actions.GetUsersInfoRequest(token));
    },
    UpdateUserInfo: (data, token) => {
      dispatch(actions.UpdateUserInfoRequest(data, token));
    },
    DeleteUserInfo: (data, token) => {
      dispatch(actions.DeleteUserInfoRequest(data, token));
    }
  };
};

class UsersInfoTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        title: 'Id',
        field: 'id',
        cellStyle: { display: 'none' },
        headerStyle: { display: 'none' }
      },
      {
        title: 'Avatar',
        field: 'picture',
        render: pictures => (
          <img
            style={{ height: 45, borderRadius: '50%' }}
            src={pictures.picture}
            alt=""
          />
        )
      },
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      {
        title: 'Type',
        field: 'type'
      },
      {
        title: 'Lock',
        field: 'isLock',
        type:'boolean'
      }
    ];
  }

  componentDidMount() {
    const UserCookie = cookie.load('token');
    this.props.GetUsersInfo(UserCookie);
  }

  render() {
    const st = this.props;
    const UserCookie = cookie.load('token');
    return (
      <MaterialTable
        title="Users Infomation List"
        columns={this.columns}
        data={st.data}
        options={{
          exportButton: true
        }}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  st.UpdateUserInfo(newData, UserCookie);
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                console.log(oldData);
                st.DeleteUserInfo(oldData, UserCookie);
              }, 600);
            })
        }}
      />
    );
  }
}

const UsersInfo = connect(mapStateToProps, mapDispatchToProps)(UsersInfoTable);

export default UsersInfo;
