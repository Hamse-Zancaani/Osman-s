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
    title: 'Reer Xaamud',
    path: '/Reer_Xaamud',
    icon: icon('ic_user'),
  },
  {
    title: 'Reer Looge',
    path: '/Reer_Looge',
    icon: icon('ic_user'),
  },
  {
    title: 'Reer Hadhiye',
    path: '/Reer_Hadhiye',
    icon: icon('ic_user'),
  },
  {
    title: 'Reer Yuusuf',
    path: '/Reer_Yuusuf',
    icon: icon('ic_user'),
  },

  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },

 
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
 
 
  




];

export default navConfig;
