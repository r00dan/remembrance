/* eslint-disable @typescript-eslint/no-unsafe-return */
import { post, BodyParams } from '../utils/apiHelper';

export interface ISignUpParams {
  email: string;
  username: string;
  password: string;
}

export interface ISignInParams {
  identifier: string;
  password: string;
}

const apiName = 'auth/local';

export const signUpUrl = 'auth/local/register';
export const signInUrl = 'auth/local/';

export async function signUp(params: BodyParams<ISignUpParams>) {
  const response = await post(`${apiName}/register`, { ...params });
  return response;
}

export async function signIn(params: BodyParams<ISignInParams>) {
  const response = await post(`${apiName}`, { ...params });
  return response;
}
