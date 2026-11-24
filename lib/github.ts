const API = 'https://api.github.com';
const TTL = 10 * 60 * 1000; // 10 phút

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
};

type CachedRepos = {
  time: number;
  data: GithubRepo[];
};

export async function getRepos(username: string): Promise<GithubRepo[]> {
  const key = `repos:${username}`;

  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem(key);
    if (raw) {
      const saved: CachedRepos = JSON.parse(raw);
      if (Date.now() - saved.time < TTL) {
        return saved.data;
      }
    }
  }

  const res = await fetch(`${API}/users/${username}/repos?sort=updated&per_page=6`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const data: GithubRepo[] = await res.json();

  if (typeof window !== 'undefined') {
    const item: CachedRepos = { time: Date.now(), data };
    localStorage.setItem(key, JSON.stringify(item));
  }

  return data;
}