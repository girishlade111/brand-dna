import React from 'react';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-ink-bleed">
      {/* Header */}
      <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-3">
        <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
        <span className="tracking-[0.2em] uppercase font-bold">
          // LEGAL & DATA ARCHITECTURE
        </span>
      </div>

      <h1 className="font-display text-4xl sm:text-6xl font-light tracking-tight text-[var(--foreground)] mb-4">
        Privacy Policy
      </h1>

      <div className="font-mono-ui text-xs text-[var(--muted)] pb-8 mb-10 border-b border-[var(--border-subtle)] flex flex-wrap items-center gap-4">
        <span>EFFECTIVE DATE: SEPTEMBER 22, 2026</span>
        <span>•</span>
        <span>SPECIFICATION VERSION: 1.2</span>
        <span>•</span>
        <span>DATA ARCHITECTURE: MINIMAL INGESTION</span>
      </div>

      {/* Overview Card */}
      <div className="p-6 mb-12 border border-[var(--border)] bg-[var(--surface-raised)]">
        <div className="font-mono-ui text-xs font-bold text-[var(--accent)] tracking-wider uppercase mb-2">
          [ CORE PRIVACY GUARANTEE ]
        </div>
        <p className="font-editorial-body text-base text-[var(--foreground)] leading-relaxed">
          Brand DNA operates as an architectural utility. We believe in minimal data footprint, zero advertising tracking, and transparent data pipelines. We <strong>never sell, rent, monetize, or broker</strong> your personal information or your extracted brand kits to third parties.
        </p>
      </div>

      <div className="space-y-12 font-editorial-body text-sm sm:text-base text-[var(--muted)] leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            01. INFORMATION WE COLLECT
          </div>
          <p>
            When utilizing Brand DNA services, we collect only the minimal data points necessary to execute extraction algorithms and maintain service quotas:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>
              <strong>Target Ingestion Inputs:</strong> Public URLs submitted for extraction, uploaded brand guidelines (PDF/SVG/PNG), and raw document markup.
            </li>
            <li>
              <strong>Synthesized Kit Data:</strong> Generated color palettes, computed typographic hierarchies, extracted SVG vector paths, W3C DTCG tokens, and editorial tone guidelines.
            </li>
            <li>
              <strong>Anonymous Session UUID Token:</strong> A randomly generated cryptographic token stored in your browser's <code className="font-mono text-xs bg-[var(--surface)] px-1 py-0.5">localStorage</code> and session state to enforce our 5-extraction free tier quota without requiring mandatory user sign-up.
            </li>
            <li>
              <strong>Account Information (Optional):</strong> If you choose to register for cloud synchronization or volume tiers, we record your verified email address and authentication timestamp.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            02. SUBPROCESSORS & THIRD-PARTY DATA FLOWS
          </div>
          <p>
            Brand DNA integrates with specialized, high-security infrastructure providers to execute scraping, AI synthesis, and cloud persistence. We transmit only the necessary contextual payloads:
          </p>
          <div className="overflow-x-auto border border-[var(--border-subtle)] bg-[var(--background)]">
            <table className="w-full text-left font-mono-ui text-xs">
              <thead className="bg-[var(--surface)] border-b border-[var(--border-subtle)] text-[var(--foreground)]">
                <tr>
                  <th className="p-3">PROVIDER</th>
                  <th className="p-3">PURPOSE</th>
                  <th className="p-3">DATA TRANSMITTED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)]">
                <tr>
                  <td className="p-3 font-bold text-[var(--foreground)]">Firecrawl</td>
                  <td className="p-3">Headless Web Crawler & DOM Scraping</td>
                  <td className="p-3 text-[var(--muted)]">Target URL submitted by user for DOM/CSS evaluation</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[var(--foreground)]">Google Gemini 3 Flash (via Lovable AI Gateway)</td>
                  <td className="p-3">AI Brand Voice & Copywriting Synthesis</td>
                  <td className="p-3 text-[var(--muted)]">Extracted public website text & headings for stylistic analysis</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-[var(--foreground)]">Supabase</td>
                  <td className="p-3">Cloud Storage & Database Infrastructure</td>
                  <td className="p-3 text-[var(--muted)]">Compiled kit JSON, anonymous session tokens, exported tokens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            03. DATA RETENTION & DELETION CONTROLS
          </div>
          <p>
            We enforce strict data hygiene and scheduled lifecycle policies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li>
              <strong>Anonymous Kits:</strong> Generated kits associated with anonymous session UUIDs are retained in Supabase cache for thirty (30) days from last access, after which they are permanently purged.
            </li>
            <li>
              <strong>Permanent In-App Deletion:</strong> You may manually purge any kit at any time directly through the kit workbench or library view.
            </li>
            <li>
              <strong>Account Deletion:</strong> Registered account holders may request complete deletion of their account and all associated tokens by contacting our privacy compliance desk. All data records are purged within seven (7) business days.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            04. STRICT STATEMENT: NO SALE OF PERSONAL DATA
          </div>
          <div className="p-5 border-l-4 border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)] font-medium">
            Brand DNA has never sold, rented, or leased personal information or user-extracted brand assets. We do not participate in cross-site behavioural advertising, third-party data broker cooperatives, or targeted marketing aggregators.
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <div className="font-mono-ui text-xs text-[var(--foreground)] font-bold tracking-[0.16em] uppercase">
            05. COOKIES & LOCAL STORAGE SPECIFICATION
          </div>
          <p>
            We use strictly essential browser storage to provide core system functionality:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
            <li><code className="font-mono text-xs text-[var(--foreground)]">theme</code>: Stores your visual display preference (<code className="font-mono text-xs">light</code> or <code className="font-mono text-xs">dark</code>).</li>
            <li><code className="font-mono text-xs text-[var(--foreground)]">brand_dna_anon_token</code>: Cryptographic UUID to manage free extraction quotas.</li>
            <li><code className="font-mono text-xs text-[var(--foreground)]">brand_dna_cookie_consent</code>: Records your acknowledgment of this privacy architecture.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 p-6 border border-[var(--border-subtle)] bg-[var(--surface-raised)]">
          <div className="font-mono-ui text-xs text-[var(--accent)] font-bold tracking-[0.16em] uppercase">
            06. PRIVACY INQUIRIES & DATA RIGHTS CONTACT
          </div>
          <p className="text-[var(--foreground)]">
            For data access requests, deletion verifications, or GDPR/CCPA compliance inquiries, please transmit your request to our compliance registry:
          </p>
          <div className="font-mono-ui text-xs space-y-1.5 text-[var(--foreground)] pt-2">
            <div>ELECTRONIC MAIL: <a href="mailto:privacy@branddna.design" className="text-[var(--accent)] underline font-bold">privacy@branddna.design</a></div>
            <div className="text-[var(--muted)]">[ATTN: Girish // Brand DNA Privacy Office]</div>
            <div className="text-[var(--muted)]">SUPPORT DESK: <button type="button" onClick={() => onNavigate('/contact')} className="text-[var(--foreground)] underline font-bold">[ TRANSMIT VIA IN-APP DESK ↗ ]</button></div>
          </div>
        </section>
      </div>

      <div className="mt-14 pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono-ui text-xs">
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="btn-bracketed"
        >
          [ ← RETURN TO WORKBENCH ]
        </button>
        <button
          type="button"
          onClick={() => onNavigate('/terms-and-conditions')}
          className="btn-bracketed btn-bracketed-primary"
        >
          <span>[ TERMS & CONDITIONS → ]</span>
        </button>
      </div>
    </div>
  );
};
