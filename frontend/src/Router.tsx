import { useRoutes } from "react-router-dom";
import {
  MainPage,
  AuthPage,
  LoginPage,
} from './pages';

enum Routes {
  MAIN = '/',
  AUTH = 'auth',
  LOGIN = 'login',
}

export function Router() {
  const routes = useRoutes([
    {
      path: Routes.MAIN,
      element: <MainPage />,
    },
    {
      path: Routes.AUTH,
      element: <AuthPage />,
    },
    {
      path: Routes.LOGIN,
      element: <LoginPage />,
    },
  ]);
  
  return routes;
}
