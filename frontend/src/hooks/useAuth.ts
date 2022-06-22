/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function useAuth() {
  const [authToken, setAuthToken] = useState<string>('');
  const { storeItem, updateStoreItem } = useLocalStorage('auth_token');

  useEffect(() => {
    if (storeItem) {
      setAuthToken(storeItem);
    } else {
      updateStoreItem('');
    }
  }, []);

  useEffect(() => {
    updateStoreItem(authToken);
  }, [authToken]);

  function setJwtToken(token: string) {
    setAuthToken(token);
  }

  return {
    isAuthorized: !!authToken.trim(),
    setJwtToken,
  };
}
