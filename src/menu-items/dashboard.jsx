// assets
import { DashboardOutlined,ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Naukri Updater | ADMIN',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'Bookings',
      title: 'Bookings',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
