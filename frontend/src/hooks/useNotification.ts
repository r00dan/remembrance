import { useRecoilState } from 'recoil';
import { toastTextState, toastTimeoutState } from '../store/atoms';

export function useNotification() {
  const [, setToastText] = useRecoilState(toastTextState);
  const [, setToastTimeout] = useRecoilState(toastTimeoutState);
  const updateToast = (value: string, timeout?: number) => {
    setToastText(value);
    setToastTimeout(timeout || 3000);
  };
  return {
    updateToast,
  };
}
