import { useEffect, useState } from 'react';

export function useLocalStorage<T = string>(key: string, value?: T) {
  const [storeItem, setStoreItem] = useState<T | null>(null);

  useEffect(() => {
    if (!window.localStorage) {
      throw new Error('There is no localstorage in browser');
    } else {
      const storage = window.localStorage;

      if (!storage.getItem(key)) {
        storage.setItem(key, String(value));
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, String(storeItem));
  }, [storeItem]);

  return [storeItem, setStoreItem];
}
