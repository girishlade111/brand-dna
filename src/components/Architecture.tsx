import React from 'react';
import type { ArchitectureStep } from '../types.ts';

const steps: ArchitectureStep[] = [
  {
    num: "STEP 01",
    label: "Ingestion Stage",
    tech: "URL / PDF / PNG",
    desc: "Target domain URL is crawled via a headless worker to download HTML, linked CSS bundles, SVG icons, and Google Fonts links. Raw PDF brand guides are processed with WASM."
  },
  {
    num: "STEP 02",
    label: "Font & DOM Probe",
    tech: "CSSOM & Font Observer",
    desc: "Heuristic CSS inspection parses computed styles, font-weight scales, display vs body pairings, and discovers root CSS variables or Tailwind utility prefixes."
  },
  {
    num: "STEP 03",
    label: "Deterministic Recoloring",
    tech: "WASM Pixel Engine",
    desc: "Harvested vector SVGs and marks undergo lossless vector normalization, removing baked hardcoded fills and generating adaptive light, dark, and monochrome masks."
  },
  {
    num: "STEP 04",
    label: "AI Brand Synthesis",
    tech: "Gemini 3 Flash",
    desc: "High-speed semantic analysis classifies color roles, tests relative luminance against WCAG 2.1 AA/AAA thresholds, and synthesizes brand voice dos & don'ts."
  },
  {
    num: "STEP 05",
    label: "Production Delivery",
    tech: "Supabase & Edge CDN",
    desc: "Tokens are stored with cryptographic hashes, generating instant /share/:token public review links and downloadable packages in CSS, Tailwind, JSON, and Markdown."
  }
];

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-[0.20em] mb-2">
            // SYSTEM TOPOLOGY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] tracking-[-0.01em] mb-4">
            Deterministic Extraction Pipeline
          </h2>
          <p className="font-editorial-body text-base text-[var(--muted)]">
            From raw HTTP response to W3C-compliant design tokens in 15 seconds. High-throughput edge infrastructure designed for zero hallucination.
          </p>
        </div>

        {/* Interactive Pipeline Visual Diagram */}
        <div className="border border-[var(--border)] bg-[var(--surface-raised)] p-6 sm:p-8 mb-10">
          <div className="font-mono-ui text-[11px] text-[var(--muted)] uppercase tracking-wider mb-6 flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <span>DATA PIPELINE SEQUENCE</span>
            <span>LATENCY: ~14.8 SECONDS</span>
          </div>

          {/* Linear Flow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((s, idx) => (
              <div
                key={s.num}
                className="border border-[var(--border-subtle)] bg-[var(--background)] p-4 flex flex-col justify-between relative group hover:border-[var(--border)] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono-ui text-[10px] text-[var(--accent)] font-bold mb-2">
                    <span>{s.num}</span>
                    {idx < 4 && <span className="hidden md:inline text-[var(--muted)] font-mono-ui">→</span>}
                  </div>
                  <h3 className="font-display text-lg text-[var(--foreground)] font-normal mb-1">
                    {s.label}
                  </h3>
                  <div className="font-mono-ui text-[10px] text-[var(--muted)] uppercase tracking-wider mb-3">
                    {s.tech}
                  </div>
                  <p className="font-editorial-body text-xs text-[var(--muted)] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
