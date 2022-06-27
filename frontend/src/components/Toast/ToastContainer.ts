import { createElement, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { toastTextState, toastTimeoutState } from '../../store/atoms';
import { Toast } from './Toast';

export function ToastContainer() {
  const [isVisible, setVisibility] = useState<boolean>(false);
  const [toastText, setToastText] = useRecoilState(toastTextState);
  const [toastTimeout] = useRecoilState(toastTimeoutState);

  useEffect(() => {
    if (toastText.trim()) {
      setVisibility(true);
      const timer = setTimeout(() => {
        setVisibility(false);
        setToastText('');
      }, toastTimeout);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [toastText]);
  return createElement(Toast, {
    value: toastText,
    isVisible,
  });
}
