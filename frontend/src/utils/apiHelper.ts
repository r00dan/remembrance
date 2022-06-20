const base_url = 'http://localhost:1337/api';
const bearer = '0679975c43f51884fffc345545f7a6af6f4711b7cc84faed685a59ff33973a6c78df6ec74e8df49b68665038a2249f52a562c02e75f42ea49517a666b5cdea2144a7bc5bd70b2dce3feac6535d53370d02fb39b0e1704378f17d38cd50030a3af9898df2082d5ea35b23b1bd560a0430ee630d23ea9ddd4bb26b6fcc6e8103cd';
const headers = new Headers({
  Authorization: `Bearer ${bearer}`,
});

export async function get(query: string): Promise<void> {
  await fetch(`${base_url}/${query}`, { method: 'get', headers });
}

export async function post(query: string): Promise<void> {
  await fetch(`${base_url}/${query}`, { method: 'post', headers });
}
