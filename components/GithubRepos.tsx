'use client';

import { useEffect, useState } from 'react';
import { getRepos, type GithubRepo } from '@/lib/github';

export function GithubRepos({ username = 'thienlam23130146' }: { username?: string }) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRepos(username)
      .then((data) => {
        setRepos(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return <p className="text-sm text-muted-foreground mt-4">Đang tải danh sách repo từ GitHub...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-500 mt-4">Không thể tải repo: {error}</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-4">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-4 border rounded-lg hover:border-blue-500 hover:bg-accent/50 transition-all"
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-base truncate">{repo.name}</h3>
            {repo.stargazers_count > 0 && (
              <span className="text-xs text-muted-foreground shrink-0">
                ★ {repo.stargazers_count}
              </span>
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {repo.description || 'Không có mô tả'}
          </p>

          {repo.language && (
            <span className="inline-block mt-3 text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
              {repo.language}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}