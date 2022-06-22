import { atom } from 'recoil';

export enum Atoms {
  USERNAME = 'authUser_username',
  EMAIL = 'authUser_email',
  TOKEN = 'authUser_token',
  SERVICES = 'authUser_services',
}

export const authorizedUserUsernameState = atom<string>({
  key: Atoms.USERNAME,
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
