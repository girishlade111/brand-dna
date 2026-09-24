import React, { useState } from 'react';
import type { ExtractionError, ExtractionProgress } from '../types.ts';

interface HeroProps {
  onExtract: (url: string) => void;
  isExtracting: boolean;
  extractionProgress?: ExtractionProgress | null;
  extractionError?: ExtractionError | null;
  onClearError?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExtract,
  isExtracting,
  extractionProgress,
  extractionError,
  onClearError
}) => {
  const [url, setUrl] = useState('https://stripe.com');
  // Feature flag / query param support (?variant=b) with default to 'a'
  const [variant, setVariant] = useState<'a' | 'b'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const v = params.get('variant') || params.get('v');
      if (v === 'b' || v === '2') return 'b';
      const stored = localStorage.getItem('hero_headline_variant');
      if (stored === 'b') return 'b';
    }
    return 'a';
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    if (onClearError) onClearError();
    onExtract(url);
  };

  const handlePreset = (presetUrl: string) => {
    setUrl(presetUrl);
    if (onClearError) onClearError();
    onExtract(presetUrl);
  };

  return (
    <section
      id="hero-section"
      className="relative pt-16 pb-12 md:pt-24 md:pb-16 border-b border-[var(--border-subtle)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
            <span className="font-mono-ui text-xs font-bold uppercase tracking-[0.20em] text-[var(--muted)]">
              // PRECISION DESIGN SYSTEM EXTRACTOR
            </span>
          </div>

          {/* Headline (with feature-flagged / toggleable A/B variant support) */}
          {variant === 'b' ? (
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-[-0.02em] leading-[0.96] text-[var(--foreground)] mb-6">
              Reverse-engineer any brand.<br />
              <span className="italic font-light opacity-60">Decode any design system in seconds.</span>
            </h1>
          ) : (
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal tracking-[-0.02em] leading-[0.96] text-[var(--foreground)] mb-6">
              Steal any brand.<br />
              <span className="italic font-light opacity-60">Leave nothing behind.</span>
            </h1>
          )}

          {/* Lede Prose */}
          <p className="font-editorial-body text-lg sm:text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-8">
            Colors. Typography. Voice. Tokens. Extracted from any live URL, vector PDF, or brand asset, verified against WCAG accessibility standards, and exported into production code in seconds.
          </p>

          {/* Extraction Input Container */}
          <div className="glass-editorial p-2 sm:p-3 mb-2 max-w-2xl border border-[var(--border)] relative">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2">
              <div className="flex-1 flex items-center bg-[var(--background)] border border-[var(--border-subtle)] px-3 py-2.5">
                <span className="font-mono-ui text-xs text-[var(--muted)] mr-2 select-none">URL:</span>
                <input
                  id="hero-target-url-input"
                  type="text"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (extractionError && onClearError) onClearError();
                  }}
                  placeholder="e.g. https://stripe.com, https://linear.app, or pdf"
                  className="w-full bg-transparent font-mono-ui text-xs text-[var(--foreground)] focus:outline-none placeholder:text-[var(--muted)]"
                  aria-label="Target brand URL"
                />
              </div>
              <button
                id="hero-extract-submit-btn"
                type="submit"
                disabled={isExtracting}
                className="btn-bracketed btn-bracketed-primary sm:w-auto text-center"
              >
                <span>{isExtracting ? '[ PROCESSING PIPELINE... ]' : '[ EXTRACT BRAND ]'}</span>
              </button>
            </form>

            {/* 5-Step Pipeline Loading State (Deterministic & Non-Simulated Execution) */}
            {isExtracting && (
              <div
                id="hero-pipeline-loading-overlay"
                className="mt-3 p-4 bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] font-mono-ui text-xs"
                role="status"
                aria-live="polite"
              >
                {/* Active Step Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--accent)] inline-block animate-pulse" />
                    <span className="font-bold tracking-wider text-[var(--foreground)]">
                      {extractionProgress
                        ? `[ 0${extractionProgress.step}/05 ] ${extractionProgress.stepName}`
                        : '[ 01/05 ] INGESTION ENGINE INITIATED'}
                    </span>
                  </div>
                  <span className="text-[var(--muted)] text-[11px]">
                    {extractionProgress ? `${extractionProgress.percent}%` : '15%'}
                  </span>
                </div>

                {/* Progress Bar (Sharp corners, sumi/washi, no border radius) */}
                <div className="w-full h-1.5 bg-[var(--border-subtle)] overflow-hidden mb-3">
                  <div
                    className="h-full bg-[var(--foreground)] transition-all duration-300 ease-out"
                    style={{ width: `${extractionProgress ? extractionProgress.percent : 20}%` }}
                  />
                </div>

                {/* 5-Step Pipeline Breadcrumb Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-[10px] text-[var(--muted)] pt-1 border-t border-[var(--border-subtle)]">
                  <div className={extractionProgress && extractionProgress.step >= 1 ? 'text-[var(--foreground)] font-bold' : 'opacity-60'}>
                    01. Ingestion
                  </div>
                  <div className={extractionProgress && extractionProgress.step >= 2 ? 'text-[var(--foreground)] font-bold' : 'opacity-60'}>
                    02. Font & DOM
                  </div>
                  <div className={extractionProgress && extractionProgress.step >= 3 ? 'text-[var(--foreground)] font-bold' : 'opacity-60'}>
                    03. WCAG Matrix
                  </div>
                  <div className={extractionProgress && extractionProgress.step >= 4 ? 'text-[var(--foreground)] font-bold' : 'opacity-60'}>
                    04. Gemini AI
                  </div>
                  <div className={extractionProgress && extractionProgress.step >= 5 ? 'text-[var(--foreground)] font-bold' : 'opacity-60'}>
                    05. Tokens
                  </div>
                </div>

                {/* Pipeline Step Sub-description */}
                {extractionProgress && (
                  <div className="mt-2 text-[10px] text-[var(--muted)] italic">
                    › {extractionProgress.description}
                  </div>
                )}
              </div>
            )}

            {/* Error State Card (SSRF Blocked, Timeout, Unreachable) */}
            {extractionError && !isExtracting && (
              <div
                id="hero-extraction-error-card"
                className="mt-3 p-4 bg-[var(--surface-raised)] border border-[var(--accent)] text-[var(--foreground)] font-mono-ui text-xs"
                role="alert"
                aria-live="assertive"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                    <span className="w-2 h-2 bg-[var(--accent)] inline-block select-none" />
                    <span>[ ✕ EXTRACTION FAILED: {extractionError.code} ]</span>
                  </div>
                  {onClearError && (
                    <button
                      type="button"
                      onClick={onClearError}
                      className="text-[10px] text-[var(--muted)] hover:text-[var(--foreground)]"
                      aria-label="Dismiss error"
                    >
                      [ ✕ DISMISS ]
                    </button>
                  )}
                </div>

                <div className="font-bold text-[var(--foreground)] text-sm mb-1">
                  {extractionError.title}
                </div>
                <p className="font-editorial-body text-xs text-[var(--foreground)] opacity-90 leading-relaxed mb-3">
                  {extractionError.message}
                </p>

                {extractionError.targetUrl && (
                  <div className="text-[10px] text-[var(--muted)] mb-3 bg-[var(--background)] p-2 border border-[var(--border-subtle)]">
                    <span className="text-[var(--accent)] font-bold">REJECTED TARGET: </span>
                    <span className="break-all">{extractionError.targetUrl}</span>
                  </div>
                )}

                {/* Remediation & Retry Actions */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--border-subtle)]">
                  <button
                    type="button"
                    onClick={() => {
                      if (onClearError) onClearError();
                      onExtract(url);
                    }}
                    className="btn-bracketed text-[11px] py-1 px-3 text-[var(--accent)] border-[var(--accent)]"
                  >
                    <span>[ RETRY EXTRACTION ]</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreset('https://stripe.com')}
                    className="btn-bracketed text-[11px] py-1 px-3"
                  >
                    <span>[ LOAD VERIFIED PRESET: STRIPE ]</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Early Pricing Signal Microcopy */}
          <div className="font-mono-ui text-[11px] text-[var(--muted)] mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] inline-block select-none" />
            <span>No signup required — 1 free extraction, full W3C token export.</span>
          </div>

          {/* Preset Chips & Trademark / Affiliation Disclaimer */}
          <div className="mb-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono-ui text-[10px] text-[var(--muted)]">
              <span className="uppercase tracking-wider mr-1">TRY PRESETS:</span>
              <button
                type="button"
                onClick={() => handlePreset('https://stripe.com')}
                className="px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
              >
                [ STRIPE.COM ]
              </button>
              <button
                type="button"
                onClick={() => handlePreset('https://linear.app')}
                className="px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
              >
                [ LINEAR.APP ]
              </button>
              <button
                type="button"
                onClick={() => handlePreset('https://vercel.com')}
                className="px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors"
              >
                [ VERCEL.COM ]
              </button>
            </div>

            {/* Trademark / Affiliation Disclaimer (Courier Prime, small caps / uppercase, muted grey) */}
            <div className="font-mono-ui text-[10px] text-[var(--muted)] tracking-wider uppercase flex items-center gap-2">
              <span className="opacity-40">•</span>
              <span>Demo extractions only — not affiliated with or endorsed by the brands shown.</span>
            </div>
          </div>

          {/* Verification Badges */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono-ui text-[11px] text-[var(--muted)]">
            <span className="border border-[var(--border-subtle)] px-2.5 py-1 tracking-[0.10em]">
              [ ✓ WCAG 2.1 AA/AAA ]
            </span>
            <span className="border border-[var(--border-subtle)] px-2.5 py-1 tracking-[0.10em]">
              [ ✓ GOOGLE FONTS SYNC ]
            </span>
            <span className="border border-[var(--border-subtle)] px-2.5 py-1 tracking-[0.10em]">
              [ ✓ 6 EXPORT FORMATS ]
            </span>
            <span className="border border-[var(--border-subtle)] px-2.5 py-1 tracking-[0.10em]">
              [ ✓ ZERO RUNTIME OVERHEAD ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

