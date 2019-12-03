import Login from './pages/LoginPage';

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Login,
    layout: '/admin'
  },
  {
    path: '/icons',
    name: 'Icons',
    icon: 'ni ni-planet text-blue',
    component: Login,
    layout: '/admin'
  },
  {
    path: '/maps',
    name: 'Maps',
    icon: 'ni ni-pin-3 text-orange',
    component: Login,
    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'ni ni-single-02 text-yellow',
    component: Login,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Login,
    layout: '/admin'
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-key-25 text-info',
    component: Login,
    layout: '/auth'
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-circle-08 text-pink',
    component: Login,
    layout: '/auth'
  }
];
export default routes;
