const base_url = 'http://localhost:1337/api';
const bearer = process.env.REACT_APP_API_KEY;
const headers = new Headers({
  Authorization: `Bearer ${bearer}`,
});

export async function get(query: string): Promise<void> {
  await fetch(`${base_url}/${query}`, { method: 'get', headers });
}

export async function post(query: string): Promise<void> {
  await fetch(`${base_url}/${query}`, { method: 'post', headers });
}
