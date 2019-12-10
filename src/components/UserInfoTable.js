import React from 'react';
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import cookie from 'react-cookies';

const mapStateToProps = state => {
  const UsersState = state.UsersReducer;
  return {
    data: UsersState.usersInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    GetUsersInfo: (token) => {
      dispatch(actions.GetUsersInfoRequest(token));
    }
  };
};

class UsersInfoTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        title: 'Avatar',
        field: 'picture',
        render: pictures => (
          <img
            style={{ height: 45, borderRadius: '50%' }}
            src={pictures.picture}
            alt=""
          />
        ),
      },
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      {
        title: 'Type',
        field: 'Type'
      }
    ];
  }
  
  componentDidMount() {
    const UserCookie = cookie.load('token');
    this.props.GetUsersInfo(UserCookie);
  }

  render() {
    const st = this.props;
    // const UserCookie = cookie.load('token');
    // st.GetUsersInfo(UserCookie);
    return (
      <MaterialTable
        title="User Infomation List"
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

const UsersInfo = connect(mapStateToProps, mapDispatchToProps)(UsersInfoTable);

export default UsersInfo;
