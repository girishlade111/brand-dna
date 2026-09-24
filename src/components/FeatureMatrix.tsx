import React from 'react';
import type { FeaturePillar } from '../types.ts';

// Geometric line-art SVG icons (16-20px), zero border radius, stroke-based line art strictly in sumi ink/current color
const renderPillarIcon = (num: string) => {
  switch (num) {
    case "01.": // Multi-Modal Ingestion Engine - Ingestion browser / DOM window
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <rect x="1.5" y="2.5" width="15" height="13" />
          <line x1="1.5" y1="6.5" x2="16.5" y2="6.5" />
          <line x1="5.5" y1="4.5" x2="5.5" y2="4.5" strokeWidth="2" strokeLinecap="square" />
          <line x1="8.5" y1="4.5" x2="8.5" y2="4.5" strokeWidth="2" strokeLinecap="square" />
          <polyline points="6 10.5 8 12.5 12 8.5" />
        </svg>
      );
    case "02.": // Semantic Color Intelligence & WCAG Matrix - Contrast swatch / checkerboard
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <rect x="2" y="2" width="14" height="14" />
          <line x1="9" y1="2" x2="9" y2="16" />
          <line x1="9" y1="5.5" x2="16" y2="5.5" />
          <line x1="9" y1="9" x2="16" y2="9" />
          <line x1="9" y1="12.5" x2="16" y2="12.5" />
          <rect x="4" y="4" width="3" height="3" fill="currentColor" stroke="none" />
        </svg>
      );
    case "03.": // Typography Hierarchy & Google Fonts Resolution - Geometric letterform 'A' & baselines
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <path d="M4 14.5L9 3.5L14 14.5" />
          <line x1="6" y1="10.5" x2="12" y2="10.5" />
          <line x1="2" y1="16" x2="16" y2="16" />
        </svg>
      );
    case "04.": // Logo Studio & Deterministic Pixel Engine - Geometric mark / vector node aperture
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <polygon points="9,2 16,9 9,16 2,9" />
          <rect x="6.5" y="6.5" width="5" height="5" />
          <line x1="9" y1="2" x2="9" y2="6.5" />
          <line x1="9" y1="11.5" x2="9" y2="16" />
        </svg>
      );
    case "05.": // W3C Design Tokens Engine - Token brackets / structural grid
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <path d="M5.5 3.5H3V14.5H5.5" />
          <path d="M12.5 3.5H15V14.5H12.5" />
          <line x1="7" y1="9" x2="11" y2="9" />
          <rect x="8" y="4.5" width="2" height="2" />
          <rect x="8" y="11.5" width="2" height="2" />
        </svg>
      );
    case "06.": // AI Brand Voice & Copywriting Synthesis - Editorial quill / quote block
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <rect x="3" y="3" width="12" height="12" />
          <line x1="6" y1="6.5" x2="12" y2="6.5" />
          <line x1="6" y1="9" x2="12" y2="9" />
          <line x1="6" y1="11.5" x2="9.5" y2="11.5" />
        </svg>
      );
    case "07.": // Multi-Format Export Suite - Package download / code bundle
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <rect x="2.5" y="2.5" width="13" height="13" />
          <polyline points="6 8 9 11 12 8" />
          <line x1="9" y1="4.5" x2="9" y2="11" />
          <line x1="5.5" y1="13.5" x2="12.5" y2="13.5" />
        </svg>
      );
    case "08.": // Public Sharing & Visual Diff Versioning - Split diff / network link
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--foreground)]" aria-hidden="true">
          <rect x="2.5" y="4" width="5" height="10" />
          <rect x="10.5" y="4" width="5" height="10" />
          <line x1="7.5" y1="9" x2="10.5" y2="9" />
          <line x1="5" y1="7" x2="5" y2="7" strokeWidth="2" strokeLinecap="square" />
          <line x1="13" y1="7" x2="13" y2="7" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );
    default:
      return null;
  }
};

const features: FeaturePillar[] = [
  {
    num: "01.",
    title: "Multi-Modal Ingestion Engine",
    description: "Deep crawling of live web stylesheets, CSS variables, Google Fonts links, SVG marks, and OpenGraph metadata. WASM-accelerated vector PDF document parsing extracts embedded brand decks and style sheets with zero distortion.",
    tags: ["[ HEADLESS DOM CRAWLER ]", "[ WASM PDF PARSER ]", "[ SVG ASSET HARVESTER ]"]
  },
  {
    num: "02.",
    title: "Semantic Color Intelligence & WCAG Matrix",
    description: "Transforms extracted hex collections into functional roles (Primary, Surface, Text, Accent). Automated ISO 9241 and WCAG 2.1 AA/AAA accessibility scoring with relative luminance math and interactive color locking.",
    tags: ["[ WCAG 2.1 AA/AAA ]", "[ RELATIVE LUMINANCE ]", "[ SEMANTIC TOKEN MAPPING ]"]
  },
  {
    num: "03.",
    title: "Typography Hierarchy & Google Fonts Resolution",
    description: "Detects font families, optical sizes, and weights across headings and body copy. Proprietary desktop fonts are dynamically mapped to open-source Google Font equivalents with live interactive specimen previews.",
    tags: ["[ OPTICAL SIZING ]", "[ GOOGLE FONTS RESOLVER ]", "[ LIVE SPECIMEN ]"]
  },
  {
    num: "04.",
    title: "Logo Studio & Deterministic Pixel Engine",
    description: "Discovers high-res vector SVGs, marks, and favicons. Automatically applies deterministic recoloring across light-on-dark, dark-on-light, and monochrome states, cleanly isolating the standalone mark from the wordmark.",
    tags: ["[ VECTOR ISOLATION ]", "[ DETERMINISTIC RECOLOR ]", "[ LOSSLESS SVG ]"]
  },
  {
    num: "05.",
    title: "W3C Design Tokens Engine",
    description: "Synthesizes mathematical spacing scales (4px, 8px, 16px...), elevation tokens, border-radius definitions, and typography tokens fully compliant with the 2024 W3C Design Token Community Group standard.",
    tags: ["[ W3C TOKENS FORMAT ]", "[ SPACING MATH ]", "[ ELEVATION MATRIX ]"]
  },
  {
    num: "06.",
    title: "AI Brand Voice & Copywriting Synthesis",
    description: "Analyzes company landing page prose and companion pages (/about, /terms) to extract authentic brand tone, recurring terminology, and strict copywriting dos and don'ts for marketing and engineering teams.",
    tags: ["[ VOICE ARCHETYPE ]", "[ DOS & DON'TS MATRIX ]", "[ SYNTHESIZED LEAD COPY ]"]
  },
  {
    num: "07.",
    title: "Multi-Format Export Suite",
    description: "One-click download of production-ready tokens.css variables, tailwind.config.js theme objects, tokens.json for Figma / Tokens Studio, DESIGN.md AI system prompts, and PDF guideline packages.",
    tags: ["[ CSS VARIABLES ]", "[ TAILWIND V4 READY ]", "[ TOKENS STUDIO JSON ]", "[ DESIGN.MD ]"]
  },
  {
    num: "08.",
    title: "Public Sharing & Visual Diff Versioning",
    description: "Generate frictionless read-only share links (/share/:token) for stakeholder reviews. Built-in version history tracks token alterations with side-by-side visual diff snapshots over time.",
    tags: ["[ READ-ONLY SHARE LINK ]", "[ VISUAL DIFF SNAPSHOTS ]", "[ AUDIT VERSIONING ]"]
  }
];

export const FeatureMatrix: React.FC = () => {
  return (
    <section id="ingestion" className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-[0.20em] mb-2">
            // SYSTEM CAPABILITIES
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] tracking-[-0.01em] mb-4">
            The Eight Pillars of Brand DNA
          </h2>
          <p className="font-editorial-body text-base text-[var(--muted)]">
            Engineered without shortcuts. Every stage of brand deconstruction is grounded in open web standards, accessibility verification, and mathematical precision.
          </p>
        </div>

        {/* Editorial Two-Column Index Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--border)]">
          {features.map((f) => (
            <div
              key={f.num}
              className="border-r border-b border-[var(--border)] p-8 sm:p-10 flex flex-col justify-between hover:bg-[var(--surface)]/40 transition-colors"
            >
              <div>
                {/* Header with Number Counter and Geometric Line-Art Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="font-mono-ui text-xs text-[var(--accent)] font-bold tracking-[0.2em]">
                    {f.num}
                  </div>
                  <div className="p-1 border border-[var(--border-subtle)] bg-[var(--background)] flex items-center justify-center">
                    {renderPillarIcon(f.num)}
                  </div>
                </div>
                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl text-[var(--foreground)] font-normal mb-3">
                  {f.title}
                </h3>
                {/* Description */}
                <p className="font-editorial-body text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
                  {f.description}
                </p>
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)]">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-ui text-[10px] text-[var(--foreground)] bg-[var(--surface-raised)] border border-[var(--border-subtle)] px-2 py-0.5 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
