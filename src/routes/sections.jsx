import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import Reer_Hadhiye from 'src/Scenes/Reer Hadhiye/Reer_Hadhiye';
import Reer_Looge from 'src/Scenes/Reer Looge/Reer_Looge';
import Reer_Xaamud from 'src/Scenes/Reer Xaamud/reer_Xaamud';
import Reer_Yuusuf from 'src/Scenes/Reer Yuusuf/Reer_Yuusuf';

// ----------------------------------------------------------------------
export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Add_Yuusuf=lazy(()=>import ('src/Scenes/Reer Yuusuf/Add_Yuusuf'))
export const Add_Looge=lazy(()=>import ('src/Scenes/Reer Looge/Add_Looge'))
export const Add_Xaamud=lazy(()=>import ('src/Scenes/Reer Xaamud/Add_Xaamud'))
export const Add_Hadhiye=lazy(()=>import ('src/Scenes/Reer Hadhiye/Add_Hadhiye'))





// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
       
        { path: 'Reer_Xaamud', element: <Reer_Xaamud/> },
        { path: 'Reer_Looge', element: <Reer_Looge /> },
        { path: 'Reer_Hadhiye', element: <Reer_Hadhiye /> },
        { path: 'Reer_Yuusuf', element: <Reer_Yuusuf/> },
        
      
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    {
       path: 'Add_Yuusuf', 
       element: <Add_Yuusuf /> },
       { path: 'Add_Looge', element: <Add_Looge /> },
       { path: 'Add_Xaamud', element: <Add_Xaamud /> },
       { path: 'Add_Hadhiye', element: <Add_Hadhiye/> },
       
  ]);

  return routes;
}
