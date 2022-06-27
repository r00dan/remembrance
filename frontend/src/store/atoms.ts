import { atom } from 'recoil';

export enum Atoms {
  USERNAME = 'authUser_username',
  EMAIL = 'authUser_email',
  TOKEN = 'authUser_token',
  SERVICES = 'authUser_services',
  CODE = 'authUser_code',
  TOAST_TEXT = 'toast_text',
  TOAST_TIMEOUT = 'toast_timeout',
}

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
