import { Navigate, useRoutes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import {
  MainPage,
  AuthPage,
} from './pages';

enum Routes {
  MAIN = '/',
  AUTH = 'auth',
}

export function Router() {
  const { isAuthorized } = useAuth();
  const routes = useRoutes([
    {
      path: Routes.MAIN,
      element: isAuthorized ? <MainPage /> : <Navigate to={Routes.AUTH} replace />,
    },
    {
      path: Routes.AUTH,
      element: <AuthPage />,
    },
  ]);

  return routes;
}
