import { useRecoilState } from 'recoil';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { getMe } from '../api/users';
import { authorizedUserCodeState, authorizedUserEmailState, authorizedUserUsernameState } from '../store/atoms';

export function useInit() {
  const [, setUsername] = useRecoilState(authorizedUserUsernameState);
  const [, setEmail] = useRecoilState(authorizedUserEmailState);
  const [, setCode] = useRecoilState(authorizedUserCodeState);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getMe();
      setUsername(response?.username);
      setEmail(response?.email);
      setCode(response?.secureCode);
    };

    fetchUserInfo();
  }, []);
  return {};
}
