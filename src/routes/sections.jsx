import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Employee =lazy(()=>import ('src/Scenes/Employee/Employee'))
export const Attendance=lazy(()=>import ('src/Scenes/Attendance/Attendance'))
export const Organization=lazy(()=>import ('src/Scenes/Organization/Oraganiztion'))
export const Training=lazy(()=>import ('src/Scenes/Training/Training'))
export const Project=lazy(()=>import ('src/Scenes/Project/Project'))
export const Payroll=lazy(()=>import ('src/Scenes/Payroll/Payroll'))
export const Position=lazy(()=>import ('src/Scenes/Position/Position'))
export const Perfomance=lazy(()=>import ('src/Scenes/Perfomance/Perfomance'))
export const Add_Employee=lazy(()=>import ('src/Scenes/Employee/Add_Employee'))
export const Add_Project=lazy(()=>import ('src/Scenes/Project/Add_Project'))
export const Add_Attendance=lazy(()=>import ('src/Scenes/Attendance/Add_Attendance'))
export const Add_Oragnization=lazy(()=>import ('src/Scenes/Organization/Add_Oragnization'))





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
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'employee', element: <Employee /> },
        { path: 'Attendance', element: <Attendance /> },
        { path: 'Project', element: <Project /> },
        { path: 'Organization', element: <Organization /> },
        { path: 'Training', element: <Training /> },
        { path: 'Payroll', element: <Payroll /> },
        { path: 'Position', element: <Position /> },
        { path: 'Perfomance', element: <Perfomance /> },
      
      
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
       path: 'Add_Employee', 
       element: <Add_Employee /> },
       { path: 'Add_Project', element: <Add_Project /> },
       { path: 'Add_Attendance', element: <Add_Attendance /> },
       { path: 'Add_Oragnization', element: <Add_Oragnization /> },
       
  ]);

  return routes;
}
