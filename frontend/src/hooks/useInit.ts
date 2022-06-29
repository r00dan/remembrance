// import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

// import { authorizedUserCodeState, authorizedUserEmailState, authorizedUserUsernameState } from '../store/atoms';

export function useInit() {
  // const [, setUsername] = useRecoilState(authorizedUserUsernameState);
  // const [, setEmail] = useRecoilState(authorizedUserEmailState);
  // const [, setCode] = useRecoilState(authorizedUserCodeState);

  useEffect(() => {
    const fetchUserInfo = async () => {
      // setUsername(response?.username);
      // setEmail(response?.email);
      // setCode(response?.secureCode);
    };

    fetchUserInfo();
  }, []);
  return {};
}
