import React, { useState, useEffect } from 'react';

interface GitHubRepoData {
  stars: number | null;
  status: 'loading' | 'live' | 'pending';
  repoName: string;
}

export const SocialProofStrip: React.FC = () => {
  const [gitHubData, setGitHubData] = useState<GitHubRepoData>({
    stars: null,
    status: 'loading',
    repoName: 'brand-muse-kit/brand-dna'
  });

  useEffect(() => {
    let isMounted = true;
    const repo =
      (import.meta.env.VITE_GITHUB_REPO as string | undefined) ||
      'brand-muse-kit/brand-dna';

    // Attempt live fetch from GitHub API; fallback gracefully with honest status (no fabricated numbers)
    try {
      if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
        window.fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
            Accept: 'application/vnd.github.v3+json'
          }
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Status ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            if (isMounted) {
              setGitHubData({
                stars: typeof data.stargazers_count === 'number' ? data.stargazers_count : null,
                status: 'live',
                repoName: repo
              });
            }
          })
          .catch(() => {
            if (isMounted) {
              // Transparent fallback indicating repo link / pending public release rather than fake stars
              setGitHubData({
                stars: null,
                status: 'pending',
                repoName: repo
              });
            }
          });
      } else {
        if (isMounted) {
          setGitHubData({
            stars: null,
            status: 'pending',
            repoName: repo
          });
        }
      }
    } catch (_) {
      if (isMounted) {
        setGitHubData({
          stars: null,
          status: 'pending',
          repoName: repo
        });
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="social-proof-strip"
      aria-label="System Trust and Technical Specifications"
      className="border-b border-[var(--border-subtle)] bg-[var(--surface)] font-mono-ui text-xs text-[var(--muted)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 text-[11px]">
          {/* GitHub Star Status (Data-Driven / No Fake Numbers) */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 inline-block select-none" />
            <a
              href={`https://github.com/${gitHubData.repoName}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-2 group"
            >
              <span className="text-[var(--foreground)] font-bold tracking-wider">[ GITHUB ]</span>
              {gitHubData.status === 'live' && gitHubData.stars !== null ? (
                <span className="text-emerald-700 dark:text-emerald-400">
                  ★ {gitHubData.stars.toLocaleString()} STARS
                </span>
              ) : gitHubData.status === 'loading' ? (
                <span className="opacity-60">[ QUERYING LIVE STARS... ]</span>
              ) : (
                <span className="opacity-70 group-hover:opacity-100">
                  [ REPO: {gitHubData.repoName} — PENDING PUBLIC SYNC ]
                </span>
              )}
              <span className="opacity-50 group-hover:opacity-100">↗</span>
            </a>
          </div>

          {/* Standards & Zero-Telemetry Transparency Signals */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 tracking-wider uppercase text-[10px]">
            <span className="text-[var(--foreground)]">
              [ 100% DETERMINISTIC ]
            </span>
            <span className="hidden sm:inline text-[var(--border-subtle)]">•</span>
            <span>
              W3C DTCG SPEC COMPLIANT
            </span>
            <span className="hidden sm:inline text-[var(--border-subtle)]">•</span>
            <span>
              WCAG 2.1 AA/AAA RELATIVE LUMINANCE
            </span>
            <span className="hidden sm:inline text-[var(--border-subtle)]">•</span>
            <span className="text-emerald-700 dark:text-emerald-400">
              ZERO TELEMETRY // PRIVACY FIRST
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
