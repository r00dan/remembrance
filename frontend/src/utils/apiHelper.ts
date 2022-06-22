/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type BodyParams<T> = T;

const base_url = 'http://localhost:1337/api';
const bearer = window.localStorage.getItem('auth_token');

function getHeaders() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (bearer) {
    headers.append('Authorization', `Bearer ${bearer}`);
  }

  return headers;
}

export async function get(query: string) {
  const response = await fetch(`${base_url}/${query}`, { method: 'get', headers: getHeaders() });
  const result = await response.json();

  return result;
}

export async function post(query: string, params: BodyParams<any>) {
  const body = JSON.stringify({ ...params });
  const response = await fetch(`${base_url}/${query}`, { method: 'post', headers: getHeaders(), body });
  const result = await response.json();

  return result;
}
