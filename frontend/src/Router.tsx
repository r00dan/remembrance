import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';

import { useInit } from 'hooks/useInit';
import { useStore } from 'store/useStore';
import {
  MainPage,
} from 'pages';
import { Routes } from 'types/enums';

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
  ]);

  return routes;
}
