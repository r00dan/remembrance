import { useEffect, useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useInit } from './hooks/useInit';

import {
  MainPage,
  AuthPage,
} from './pages';
import { useStore } from './store/useStore';

export enum Routes {
  MAIN = '/',
  AUTH = 'auth',
}

export function Router() {
  const storage = window.localStorage;
  const [isAuthorized, setAuthorized] = useState(storage.getItem('auth_token')?.trim());
  useInit();
  useStore();
  useEffect(() => {
    setAuthorized(storage.getItem('auth_token')?.trim());
  }, [storage]);

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
