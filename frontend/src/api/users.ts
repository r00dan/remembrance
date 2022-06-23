/* eslint-disable @typescript-eslint/no-unsafe-return */
import { get } from '../utils/apiHelper';

const apiName = 'users';

export async function getMe() {
  const response = await get(`${apiName}/me`);
  return response;
}

export async function getUsers() {
  const response = await get(apiName);
  return response;
}
