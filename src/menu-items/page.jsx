// assets
import { LoginOutlined, ProfileOutlined , LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  LogoutOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  children: [
  
    {
      id: 'login1',
      title: 'Customer Login',
      type: 'item',
      url: '/login',
      icon: icons.LogoutOutlined,
      target: true
    },
    {
      id: 'register1',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true
    },
    {
      id: 'login1',
      title: 'Logout',
      type: 'item',
      url: '/login',
      icon: icons.LoginOutlined,
      target: true
    }
  ]
};

export default pages;
