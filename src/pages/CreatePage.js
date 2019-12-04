import React from 'react';
import routes from '../routes';
import Sidebar from '../components/Sidebar';
import AdminNavbar from '../components/AdminNavbar';
import Create from '../components/Create';

export default class CreatePage extends React.Component {
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: '/admin/index',
            imgSrc: require('../assets/img/brand/argon-react.png'),
            imgAlt: '...'
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar brandText="Create Admin" />
          <Create></Create>
        </div>
      </>
    );
  }
}
