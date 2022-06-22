/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState } from 'recoil';

import {
  authorizedUserUsernameState,
  authorizedUserTokenState,
  authorizedUserServicesState,
  authorizedUserEmailState,
} from './atoms';

export function useStore() {
  const [username, setUsername] = useRecoilState(authorizedUserUsernameState);
  const [emal, setEmail] = useRecoilState(authorizedUserEmailState);
  const [token, setToken] = useRecoilState(authorizedUserTokenState);
  const [services, setServices] = useRecoilState(authorizedUserServicesState);

  return {};
}
