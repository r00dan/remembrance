import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, value?: string) {
  useEffect(() => {
    if (!window.localStorage) {
      throw new Error('There is no localstorage in your browser');
    } else {
      const storage = window.localStorage;

      if (!storage.getItem(key)) {
        storage.setItem(key, String(value || ''));
      }
    }
  }, []);

  const [storeItem, setStoreItem] = useState<string>(String(window.localStorage.getItem(key)));

  function updateStoreItem(value: string): void {
    setStoreItem(value);
  }

  useEffect(() => {
    if (storeItem) {
      window.localStorage.setItem(key, String(storeItem));
    }
  }, [storeItem]);

  return { storeItem, updateStoreItem };
}
