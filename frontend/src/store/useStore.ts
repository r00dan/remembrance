/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRecoilState } from 'recoil';

import {
  authorizedUserUsernameState,
  authorizedUserTokenState,
  authorizedUserServicesState,
  authorizedUserEmailState,
  authorizedUserCodeState,
} from './atoms';

export function useStore() {
  const [username, setUsername] = useRecoilState(authorizedUserUsernameState);
  const [code, setCode] = useRecoilState(authorizedUserCodeState);
  const [emal, setEmail] = useRecoilState(authorizedUserEmailState);
  const [token, setToken] = useRecoilState(authorizedUserTokenState);
  const [services, setServices] = useRecoilState(authorizedUserServicesState);

  return {};
}
