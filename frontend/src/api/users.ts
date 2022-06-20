import { get } from '../utils/apiHelper';

const apiName = 'users';

export async function getUsers(): Promise<void> {
  const result = await get(apiName);
  console.log(result);
}
