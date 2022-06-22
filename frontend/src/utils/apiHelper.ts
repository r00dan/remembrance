/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type BodyParams<T> = T;

const base_url = 'http://localhost:1337/api';
// const bearer = process.env.REACT_APP_API_KEY;
const headers = new Headers({
  // Authorization: `Bearer ${bearer}`,
  'Content-Type': 'application/json',
});

export async function get(query: string) {
  const response = await fetch(`${base_url}/${query}`, { method: 'get', headers });
  const result = await response.json();

  return result;
}

export async function post(query: string, params: BodyParams<any>) {
  const body = JSON.stringify({ ...params });
  const response = await fetch(`${base_url}/${query}`, { method: 'post', headers, body });
  const result = await response.json();

  return result;
}
