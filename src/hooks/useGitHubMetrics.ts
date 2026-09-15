import { useState, useEffect } from 'react';
import { GitHubMetrics, GitHubRepoMetric } from '../types';

const CACHE_KEY = 'wongpinter_github_metrics';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

const LANGUAGE_COLORS: Record<string, string> = {
  Go: '#38bdf8',
  Python: '#facc15',
  TypeScript: '#818cf8',
  JavaScript: '#fde047',
  Dart: '#2dd4bf',
  PHP: '#a78bfa',
  HTML: '#fb7185',
  Shell: '#4ade80',
  Default: '#94a3b8'
};

const FALLBACK_METRICS: GitHubMetrics = {
  publicRepos: 38,
  totalStars: 4,
  followers: 2,
  publicGists: 4,
  topLanguages: [
    { language: 'Go', count: 15, percentage: 40, color: '#38bdf8' },
    { language: 'Python', count: 8, percentage: 21, color: '#facc15' },
    { language: 'TypeScript', count: 5, percentage: 13, color: '#818cf8' },
    { language: 'JavaScript', count: 3, percentage: 8, color: '#fde047' },
    { language: 'PHP / Other', count: 7, percentage: 18, color: '#a78bfa' }
  ],
  recentRepos: [
    {
      name: 'MemoDirector',
      stars: 0,
      language: 'TypeScript',
      description: 'Local-first PAO memory system builder with AI casting',
      htmlUrl: 'https://github.com/wongpinter/MemoDirector',
      pushedAt: new Date().toISOString()
    },
    {
      name: 'clipush',
      stars: 0,
      language: 'Go',
      description: 'CLI tool to save raw screenshots to remote server',
      htmlUrl: 'https://github.com/wongpinter/clipush',
      pushedAt: new Date().toISOString()
    },
    {
      name: 'gdm',
      stars: 0,
      language: 'Go',
      description: 'Terminal download manager with segmented HTTP & BitTorrent',
      htmlUrl: 'https://github.com/wongpinter/gdm',
      pushedAt: new Date().toISOString()
    }
  ],
  isLive: false,
  isLoading: false,
  lastUpdated: 'Cached Baseline'
};

export function useGitHubMetrics(username: string = 'wongpinter'): GitHubMetrics {
  const [metrics, setMetrics] = useState<GitHubMetrics>(() => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return { ...parsed.data, isLoading: false };
        }
      }
    } catch {
      // ignore storage errors
    }
    return { ...FALLBACK_METRICS, isLoading: true };
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchMetrics() {
      try {
        // Check session cache first
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
            if (isMounted) setMetrics({ ...parsed.data, isLoading: false, isLive: true });
            return;
          }
        }

        // Fetch User Profile
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error(`User fetch failed: ${userRes.status}`);
        const userData = await userRes.json();

        // Fetch Public Repos (up to 100)
        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        if (!reposRes.ok) throw new Error(`Repos fetch failed: ${reposRes.status}`);
        const reposData = await reposRes.json();

        let totalStars = 0;
        const langCounts: Record<string, number> = {};

        const recentRepos: GitHubRepoMetric[] = [];

        if (Array.isArray(reposData)) {
          reposData.forEach((repo: any, index: number) => {
            totalStars += repo.stargazers_count || 0;

            if (repo.language) {
              langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            }

            if (index < 3 && !repo.fork) {
              recentRepos.push({
                name: repo.name,
                stars: repo.stargazers_count || 0,
                language: repo.language || null,
                description: repo.description || 'Open source software repository',
                htmlUrl: repo.html_url,
                pushedAt: repo.pushed_at
              });
            }
          });
        }

        const totalLangsWithCount = Object.values(langCounts).reduce((a, b) => a + b, 0);
        const topLanguages = Object.entries(langCounts)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([language, count]) => ({
            language,
            count,
            percentage: totalLangsWithCount > 0 ? Math.round((count / totalLangsWithCount) * 100) : 0,
            color: LANGUAGE_COLORS[language] || LANGUAGE_COLORS.Default
          }));

        const result: GitHubMetrics = {
          publicRepos: userData.public_repos ?? FALLBACK_METRICS.publicRepos,
          totalStars: totalStars || FALLBACK_METRICS.totalStars,
          followers: userData.followers ?? FALLBACK_METRICS.followers,
          publicGists: userData.public_gists ?? FALLBACK_METRICS.publicGists,
          topLanguages: topLanguages.length > 0 ? topLanguages : FALLBACK_METRICS.topLanguages,
          recentRepos: recentRepos.length > 0 ? recentRepos : FALLBACK_METRICS.recentRepos,
          isLive: true,
          isLoading: false,
          lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        if (isMounted) {
          setMetrics(result);
          try {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ timestamp: Date.now(), data: result })
            );
          } catch {
            // ignore
          }
        }
      } catch (err) {
        if (isMounted) {
          setMetrics((prev) => ({
            ...prev,
            isLoading: false,
            isLive: false,
            lastUpdated: 'Cached / Fallback'
          }));
        }
      }
    }

    fetchMetrics();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return metrics;
}
