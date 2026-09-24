import React from 'react';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-ink-bleed">
      {/* Header */}
      <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-3">
        <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
        <span className="tracking-[0.2em] uppercase font-bold">
          // LEGAL SPECIFICATION & TERMS OF SERVICE
        </span>
      </div>

      <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[var(--foreground)] mb-4">
        Terms & Conditions
      </h1>

      <div className="font-mono-ui text-xs text-[var(--muted)] pb-8 mb-10 border-b border-[var(--border-subtle)] flex flex-wrap items-center gap-4">
        <span>EFFECTIVE DATE: SEPTEMBER 22, 2026</span>
        <span>•</span>
        <span>VERSION: 1.0</span>
        <span>•</span>
        <span>CONTRACTUAL JURISDICTION: [DELAWARE, USA — PRE-LAUNCH PLACEHOLDER]</span>
      </div>

      <div className="space-y-12 font-editorial-body text-sm sm:text-base text-[var(--muted)] leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            01. ACCEPTABLE USE POLICY & INGESTION CONSTRAINTS
          </div>
          <p>
            Brand DNA provides an automated extraction pipeline intended strictly for developers, designers, brand architects, and researchers. By submitting a target URL or document to the system, you warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>
              You either own the target domain/assets, possess explicit authorization to analyze the source material, or are conducting legitimate competitive, academic, or reference design research under applicable fair use principles.
            </li>
            <li>
              You will <strong>NOT</strong> attempt to ingest or bypass paywalled platforms, password-authenticated private dashboards, medical records systems, or confidential internal intranets.
            </li>
            <li>
              You will <strong>NOT</strong> use our crawler infrastructure to execute Denial of Service (DoS) attacks, automated brute-force scraping against protected endpoints, or attempt Server-Side Request Forgery (SSRF) against internal or localhost subnetworks.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            02. RATE LIMITS & FREE TIER FAIR USE POLICY
          </div>
          <p>
            To maintain service integrity and prevent abuse across our headless browser fleet, Brand DNA enforces strict quota boundaries:
          </p>
          <div className="p-5 border border-[var(--border-subtle)] bg-[var(--surface-raised)] font-mono-ui text-xs space-y-2 text-[var(--foreground)]">
            <div>• FREE TIER ALLOCATION: 5 COMPREHENSIVE BRAND EXTRACTIONS PER ANONYMOUS SESSION UUID</div>
            <div>• CONCURRENT HEADLESS CRAWLERS: MAXIMUM 1 ACTIVE INSTANCE PER CLIENT IP</div>
            <div>• SYSTEM THROTTLING: REQUESTS EXCEEDING 10 CALLS/MINUTE WILL BE TEMPORARILY SUSPENDED (HTTP 429)</div>
          </div>
          <p>
            Circumventing rate limits via IP proxies, token forgery, or distributed botnets constitutes a material breach of these Terms and will result in immediate IP banning.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            03. NO ACCURACY GUARANTEE (BEST-EFFORT MATHEMATICAL APPROXIMATION)
          </div>
          <div className="p-5 border-l-4 border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)]">
            <p className="font-semibold mb-2">PLEASE REVIEW CAREFULLY:</p>
            <p>
              Brand DNA performs automated optical and DOM parsing on public web resources. While our engine applies ISO 9241-391 mathematical contrast calculations and W3C DTCG compliance routines, all extracted tokens, chromatic clusters, typographic matches, and AI voice syntheses are <strong>best-effort approximations</strong>.
            </p>
            <p className="mt-2 text-xs text-[var(--muted)]">
              Brand DNA makes no warranty that extracted kits are pixel-perfect, legally authoritative, or exact representations of a trademark holder's internal, proprietary brand standards.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            04. INTELLECTUAL PROPERTY & TRADEMARK DISCLAIMER
          </div>
          <p>
            Brand DNA does <strong>not claim ownership</strong> over any third-party brand assets, logos, color marks, or copyrighted typography extracted through the service.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>
              All trademarks, service marks, trade names, and logos referenced or displayed remain the exclusive property of their respective owners.
            </li>
            <li>
              The extraction of design tokens creates a functional, interoperable representation for technical implementation; however, the user bears sole and exclusive responsibility for verifying that their commercial use of exported code complies with relevant copyright, trademark, and licensing obligations.
            </li>
            <li>
              Brand DNA grants you a perpetual, royalty-free license to use the generated software code output (<code className="font-mono text-xs">tokens.css</code>, <code className="font-mono text-xs">tailwind.config.js</code>, and <code className="font-mono text-xs">tokens.json</code>) within your software applications.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            05. LIMITATION OF LIABILITY & INDEMNIFICATION
          </div>
          <p>
            To the maximum extent permitted by applicable law, Brand DNA, its operators, officers, and contractors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or service interruptions resulting from your use of or inability to use the instrument.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 p-6 border border-[var(--border-subtle)] bg-[var(--surface-raised)]">
          <div className="font-mono-ui text-xs text-[var(--accent)] font-bold tracking-[0.16em] uppercase">
            06. GOVERNING LAW & JURISDICTION (PRE-LAUNCH PLACEHOLDER)
          </div>
          <p className="text-[var(--foreground)] text-sm">
            These Terms shall be governed by and construed in accordance with the laws of the <strong>[State of Delaware, United States / Placeholder for Girish's Corporate Entity]</strong>, without regard to conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located within that jurisdiction.
          </p>
          <div className="font-mono-ui text-xs text-[var(--muted)] pt-2">
            LEGAL REGISTRY: <a href="mailto:legal@branddna.design" className="text-[var(--accent)] underline font-bold">legal@branddna.design</a>
          </div>
        </section>
      </div>

      <div className="mt-14 pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-ui text-xs">
        <button
          type="button"
          onClick={() => onNavigate('/privacy-policy')}
          className="btn-bracketed"
        >
          [ ← PRIVACY POLICY ]
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="btn-bracketed btn-bracketed-primary"
        >
          <span>[ RETURN TO WORKBENCH ↗ ]</span>
        </button>
      </div>
    </div>
  );
};
