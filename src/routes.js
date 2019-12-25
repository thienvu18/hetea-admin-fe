// import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage'; 
import UsersInfoPage from './pages/UsersInfoPage';
import SkillsInfoPage from './pages/SkillsInfoPage';
import DashboardPage from './pages/DashboardPage';
import ContractsPage from './pages/ContractsPage';

var routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/create',
    name: 'Create admin',
    icon: 'ni ni-single-02 text-yellow',
    component: CreatePage,
    layout: '/admin'
  },
  {
    path: '/skillsInfo',
    name: 'Skills Infomation',
    icon: 'ni ni-bullet-list-67 text-blue',
    component: SkillsInfoPage,
    layout: '/admin'
  },
  {
    path: '/usersInfo',
    name: 'Users Infomation',
    icon: 'ni ni-bullet-list-67 text-red',
    component: UsersInfoPage,
    layout: '/admin'
  },
  {
    path: '/Contracts',
    name: 'Contracts',
    icon: 'ni ni-bullet-list-67 text-yellow',
    component: ContractsPage,
    layout: '/admin'
  },
];
export default routes;
