import { Navigate, useRoutes } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';

import {
  MainPage,
  AuthPage,
} from './pages';
import { useStore } from './store/useStore';

enum Routes {
  MAIN = '/',
  AUTH = 'auth',
}

export function Router() {
  useStore();
  const { storeItem } = useLocalStorage('auth_token');
  const token = storeItem.trim();

  const routes = useRoutes([
    {
      path: Routes.MAIN,
      element: token ? <MainPage /> : <Navigate to={Routes.AUTH} replace />,
    },
    {
      path: Routes.AUTH,
      element: <AuthPage />,
    },
  ]);

  return routes;
}
