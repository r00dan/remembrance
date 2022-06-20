import { get } from '../utils/apiHelper';

const apiName = 'services';

export async function getServices() {
  const result = await get(apiName);
  console.log(result);
}
