import { atom } from 'recoil';

import { Atoms } from 'types/enums';

export const authorizedUserUsernameState = atom<string>({
  key: Atoms.USERNAME,
  default: '',
});

export const authorizedUserCodeState = atom<string>({
  key: Atoms.CODE,
  default: '',
});

export const authorizedUserEmailState = atom<string>({
  key: Atoms.EMAIL,
  default: '',
});

export const authorizedUserTokenState = atom<string>({
  key: Atoms.TOKEN,
  default: '',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authorizedUserServicesState = atom<any[]>({
  key: Atoms.SERVICES,
  default: [],
});

export const toastTextState = atom<string>({
  key: Atoms.TOAST_TEXT,
  default: '',
});

export const toastTimeoutState = atom<number>({
  key: Atoms.TOAST_TIMEOUT,
  default: 3000,
});
