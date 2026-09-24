import React from 'react';

const manualSteps = [
  "Inspect DevTools styles line-by-line across 12 pages",
  "Manually eyeball contrast ratios in external checkers",
  "Guess proprietary desktop font pairings and fallback stacks",
  "Manually trace and recolor SVG vector logos in Figma",
  "Hand-write token variables for Tailwind, CSS, and Tokens Studio",
  "Write brand guide summary document for team and clients",
  "Total Time: 3 to 5 hours of manual, error-prone labor"
];

const automatedSteps = [
  "One URL, PDF document, or brand asset drop",
  "Automated ISO / WCAG 2.1 AA/AAA relative luminance matrix",
  "Dynamic Google Fonts resolver with live specimen tester",
  "Deterministic vector logo recoloring (Light, Dark, Monochrome)",
  "Instant exports: CSS variables, Tailwind v4, Tokens Studio JSON",
  "Synthesized brand voice archetype, dos & don'ts, sample copy",
  "Total Time: 15 seconds with cryptographically verified tokens"
];

export const Comparison: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-[0.20em] mb-2">
            // COMPARATIVE ANALYSIS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] tracking-[-0.01em] mb-4">
            Manual Reverse-Engineering vs. Brand DNA
          </h2>
          <p className="font-editorial-body text-base text-[var(--muted)]">
            Stop wasting senior engineer and design director hours re-typing CSS declarations.
          </p>
        </div>

        {/* Comparison Grid with responsive padding protection */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-[var(--border)] overflow-hidden">
          {/* Manual Column */}
          <div className="p-8 sm:p-10 pb-12 sm:pb-14 bg-[var(--surface)] border-b md:border-b-0 md:border-r border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-wider mb-2">
                THE STATUS QUO
              </div>
              <h3 className="font-display text-3xl text-[var(--foreground)] mb-6">
                Manual Brand Extraction
              </h3>
              <ul className="space-y-4 font-editorial-body text-sm text-[var(--muted)]">
                {manualSteps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-mono-ui text-[var(--accent)] font-bold select-none">✕</span>
                    <span className={idx === manualSteps.length - 1 ? "font-bold text-[var(--foreground)] font-mono-ui text-xs" : ""}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Automated Column */}
          <div className="p-8 sm:p-10 pb-12 sm:pb-14 bg-[var(--background)] flex flex-col justify-between">
            <div>
              <div className="font-mono-ui text-xs text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
                THE INVISIBLE INSTRUMENT
              </div>
              <h3 className="font-display text-3xl text-[var(--foreground)] mb-6">
                Brand DNA Automated Pipeline
              </h3>
              <ul className="space-y-4 font-editorial-body text-sm text-[var(--foreground)]">
                {automatedSteps.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="font-mono-ui text-emerald-600 font-bold select-none">✓</span>
                    <span className={idx === automatedSteps.length - 1 ? "font-bold text-[var(--accent)] font-mono-ui text-xs" : ""}>
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
