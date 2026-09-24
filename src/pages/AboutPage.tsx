import React from 'react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-ink-bleed">
      {/* Eyebrow & Status */}
      <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-4">
        <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
        <span className="tracking-[0.2em] uppercase font-bold">
          // ARCHITECTURAL PHILOSOPHY & FOUNDATIONAL THESIS
        </span>
      </div>

      {/* Main Display Headline */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[var(--foreground)] mb-6 leading-[1.08]">
        The Invisible Instrument: <br />
        <span className="italic font-normal">Deterministic Brand Extraction</span>
      </h1>

      {/* Lead Paragraph */}
      <p className="font-editorial-body text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-3xl mb-14 border-l-2 border-[var(--accent)] pl-6 py-1">
        Brand DNA exists to solve a fundamental systemic flaw in modern digital product engineering: the manual, lossy translation of live brand architecture into code. We do not invent fictitious identities. We measure and codify what already breathes in production.
      </p>

      {/* Core Grid: The Problem vs The Invisible Instrument */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* The Problem */}
        <div className="p-8 border border-[var(--border-subtle)] bg-[var(--surface-raised)] flex flex-col justify-between">
          <div>
            <div className="font-mono-ui text-xs text-[var(--accent)] tracking-[0.16em] uppercase mb-4">
              [ 01 // THE SYSTEMIC CRISIS ]
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-[var(--foreground)] mb-4 font-normal">
              Design Debt & Hallucinated Tokens
            </h2>
            <div className="font-editorial-body text-sm text-[var(--muted)] space-y-3 leading-relaxed">
              <p>
                Every day, engineers and designers spend hours using browser inspect tools, color eyedroppers, and screenshot cutouts to replicate an existing brand ecosystem.
              </p>
              <p>
                Generative AI tools exacerbate this entropy: when prompted to "create a design system," they hallucinate arbitrary hex values, unverified contrast ratios, and incompatible font pairings that bear zero resemblance to production engineering requirements.
              </p>
              <p>
                The consequence is runtime drift: UI discrepancies across marketing and web applications, accessibility violations that fail WCAG standards, and hundreds of lost engineering hours.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] font-mono-ui text-[11px] text-[var(--muted)]">
            SYSTEM ANOMALY: RUNTIME FRAGMENTATION
          </div>
        </div>

        {/* The Solution */}
        <div className="p-8 border border-[var(--foreground)] bg-[var(--surface)] flex flex-col justify-between">
          <div>
            <div className="font-mono-ui text-xs text-[var(--foreground)] tracking-[0.16em] uppercase mb-4">
              [ 02 // THE INVISIBLE INSTRUMENT ]
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-[var(--foreground)] mb-4 font-normal">
              Deterministic, Not Generative
            </h2>
            <div className="font-editorial-body text-sm text-[var(--muted)] space-y-3 leading-relaxed">
              <p>
                Brand DNA treats a live website or design artifact as a physical specimen under a microscope. An instrument does not compose music; it measures acoustic resonance with uncompromising fidelity.
              </p>
              <p>
                By executing headless Chromium browsers via Firecrawl, our engine crawls live DOM trees, resolves computed CSS properties, isolates raw SVG vectors, and calculates rigorous mathematical luminance ratios against ISO 9241-391 and WCAG 2.1 protocols.
              </p>
              <p>
                Gemini 3 Flash via Lovable AI Gateway is utilized exclusively for editorial synthesis—extracting voice archetypes, tone keywords, and stylistic constraints directly from verified copy, never fabricating arbitrary rules.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] font-mono-ui text-[11px] text-[var(--accent)] font-bold">
            STANDARD: W3C DTCG SPECIFICATION COMPLIANT
          </div>
        </div>
      </div>

      {/* Deterministic Pipeline Architecture */}
      <section className="mb-16 p-8 sm:p-10 border border-[var(--border-subtle)] bg-[var(--background)]">
        <div className="font-mono-ui text-xs text-[var(--accent)] tracking-[0.18em] uppercase mb-3">
          // THE 5-PHASE COMPILATION PIPELINE
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-[var(--foreground)] mb-8 font-light">
          From Raw Bytes to Production Code
        </h2>

        <div className="space-y-6 font-mono-ui text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <span className="sm:col-span-3 text-[var(--accent)] font-bold tracking-wider">PHASE 01: INGESTION</span>
            <div className="sm:col-span-9 font-editorial-body text-sm text-[var(--muted)]">
              Anti-SSRF gateway verification, DNS resolution, and headless Chromium DOM capture via Firecrawl. Strips third-party tracking scripts and isolates core document layout.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <span className="sm:col-span-3 text-[var(--foreground)] font-bold tracking-wider">PHASE 02: COMPUTED TRACING</span>
            <div className="sm:col-span-9 font-editorial-body text-sm text-[var(--muted)]">
              Evaluation of computed typography, font families (with dynamic Google Fonts lookup), hierarchy ratios, line-heights, and inline vector SVG extractions.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <span className="sm:col-span-3 text-[var(--foreground)] font-bold tracking-wider">PHASE 03: CHROMATIC MATRIX</span>
            <div className="sm:col-span-9 font-editorial-body text-sm text-[var(--muted)]">
              K-Means color clustering into semantic roles (Base Canvas, Primary Hue, Accent Energy, Warning). Mathematical contrast checking against WCAG 2.1 AA/AAA thresholds.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-[var(--border-subtle)]">
            <span className="sm:col-span-3 text-[var(--accent)] font-bold tracking-wider">PHASE 04: VOICE SYNTHESIS</span>
            <div className="sm:col-span-9 font-editorial-body text-sm text-[var(--muted)]">
              Editorial brand voice extraction powered by Gemini 3 Flash via Lovable AI Gateway, cataloging tonal archetypes, vocabulary dos/don'ts, and specimen taglines.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <span className="sm:col-span-3 text-[var(--foreground)] font-bold tracking-wider">PHASE 05: TOKEN COMPILATION</span>
            <div className="sm:col-span-9 font-editorial-body text-sm text-[var(--muted)]">
              Instant generation of W3C Design Tokens Community Group (DTCG) standard JSON, production <code className="font-mono text-xs text-[var(--foreground)]">tokens.css</code>, <code className="font-mono text-xs text-[var(--foreground)]">tailwind.config.js</code>, and markdown architectural guides.
            </div>
          </div>
        </div>
      </section>

      {/* Understated Call to Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border-2 border-[var(--foreground)] bg-[var(--surface-raised)]">
        <div>
          <div className="font-mono-ui text-xs text-[var(--muted)] tracking-wider uppercase mb-1">
            VERIFY WITH A LIVE TARGET
          </div>
          <h3 className="font-display text-2xl text-[var(--foreground)] font-normal">
            Experience the Invisible Instrument in action.
          </h3>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="btn-bracketed btn-bracketed-primary"
          >
            <span>[ OPEN EXTRACTION WORKBENCH ↗ ]</span>
          </button>
        </div>
      </div>
    </div>
  );
};
