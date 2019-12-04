import Login from './pages/LoginPage';
import Create from './pages/CreatePage'; 

var routes = [
  {
    path: '/index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: Create,
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
    path: '/create',
    name: 'Create admin',
    icon: 'ni ni-single-02 text-yellow',
    component: Create,
    layout: '/admin'
  },
  {
    path: '/tables',
    name: 'Tables',
    icon: 'ni ni-bullet-list-67 text-red',
    component: Login,
    layout: '/admin'
  },
];
export default routes;
