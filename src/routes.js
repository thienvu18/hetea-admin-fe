// import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage'; 
import UsersInfoPage from './pages/UsersInfoPage';
import SkillsInfoPage from './pages/SkillsInfoPage';

var routes = [
  {
    path: '/Index',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: CreatePage,
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
    path: '/SkillsInfo',
    name: 'Skills Infomation',
    icon: 'ni ni-bullet-list-67 text-blue',
    component: SkillsInfoPage,
    layout: '/admin'
  },
  {
    path: '/UsersInfo',
    name: 'Users Infomation',
    icon: 'ni ni-bullet-list-67 text-red',
    component: UsersInfoPage,
    layout: '/admin'
  },
];
export default routes;
