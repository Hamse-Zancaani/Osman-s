import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Employee',
    path: '/employee',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Organization',
    path: '/Organization',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Attendance',
    path: '/Attendance',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Payroll',
    path: '/Payroll',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Leave',
    path: '/Leave',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Training',
    path: '/Training',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Position',
    path: '/Position',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Project',
    path: '/Project',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Perfomance',
    path: '/Perfomance',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Recruitment',
    path: '/Recruitment',
    icon: icon('ic_disabled'),
  },




];

export default navConfig;
