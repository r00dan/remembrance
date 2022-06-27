import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
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
  // const storage = window.localStorage;
  // const [isAuthorized, setAuthorized] = useState<boolean>(!!storage.getItem('auth_token')?.trim());
  useInit();
  useStore();
  useEffect(() => {
    // setAuthorized(storage.getItem('auth_token')?.trim());
    // setAuthorized(true);
  }, [/* storage */]);

  const routes = useRoutes([
    {
      path: Routes.MAIN,
      element: <MainPage />,
    },
    {
      path: Routes.AUTH,
      element: <AuthPage />,
    },
  ]);

  return routes;
}
