import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage'; 
import UserInfoPage from './pages/UserInfoPage';

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: CreatePage,
    layout: '/admin'
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'ni ni-planet text-blue',
    component: LoginPage,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'ni ni-pin-3 text-orange',
    component: LoginPage,
    layout: '/admin'
  },
  {
    path: '/Create',
    name: 'Create admin',
    icon: 'ni ni-single-02 text-yellow',
    component: CreatePage,
    layout: '/admin'
  },
  {
    path: '/UserInfo',
    name: 'User Infomation',
    icon: 'ni ni-bullet-list-67 text-red',
    component: UserInfoPage,
    layout: '/admin'
  },
];
export default routes;
