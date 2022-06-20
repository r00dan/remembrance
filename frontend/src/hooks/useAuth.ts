import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function useAuth() {
  const fieldName = 'isAuthorized';
  const [isAuthorized, setAuthorized] = useState<boolean>(false);
  const [value, setValue] = useLocalStorage(fieldName, isAuthorized);

  useEffect(() => {

  }, []);

  return {
    isAuthorized,
  };
}
