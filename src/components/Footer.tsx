import React from 'react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="pt-16 pb-12 border-t border-[var(--border-subtle)] bg-[var(--surface-raised)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 font-mono-ui text-xs">
          {/* Col 1: Identity & Thesis */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[var(--foreground)] inline-block" />
              <span className="tracking-[0.18em] uppercase font-bold text-[var(--foreground)]">
                BRAND DNA <span className="text-[var(--accent)]">//</span> THE INVISIBLE INSTRUMENT
              </span>
            </div>
            <p className="font-editorial-body text-xs text-[var(--muted)] leading-relaxed max-w-sm">
              Deterministic brand design system extractor converting public URLs, PDFs, and assets into production W3C design tokens, WCAG 2.1 verified contrast palettes, and zero-runtime-drift code.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-[var(--muted)]">
              <span className="px-2 py-0.5 border border-[var(--border-subtle)]">[ NO RUNTIME LOCK-IN ]</span>
              <span className="px-2 py-0.5 border border-[var(--border-subtle)]">[ ISO 9241-391 ]</span>
              <span className="px-2 py-0.5 border border-[var(--border-subtle)]">[ ZERO TELEMETRY ]</span>
            </div>
          </div>

          {/* Col 2: System & Tools */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--foreground)]">
              // PIPELINE & TOOLS
            </div>
            <ul className="space-y-2 text-[11px] text-[var(--muted)]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ EXTRACTION WORKBENCH ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/build"
                  onClick={(e) => handleNav(e, '/build')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ RUNTIME BUILDER // /build ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  onClick={(e) => handleNav(e, '/library')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ SPECIMEN LIBRARY ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/compare"
                  onClick={(e) => handleNav(e, '/compare')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ BRAND DIFF COMPARE ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/design"
                  onClick={(e) => handleNav(e, '/design')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ W3C TOKEN SPECIFICATION ]</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Architecture & Legal */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--foreground)]">
              // SPECIFICATION & LEGAL
            </div>
            <ul className="space-y-2 text-[11px] text-[var(--muted)]">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ ABOUT & PHILOSOPHY ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ CONTACT & SUPPORT DESK ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => handleNav(e, '/privacy-policy')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ PRIVACY POLICY & SUBPROCESSORS ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => handleNav(e, '/terms-and-conditions')}
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span> <span>[ TERMS & CONDITIONS // FAIR USE ]</span>
                </a>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5 text-[10px]"
                >
                  <span>↗</span> <span>[ XML SITEMAP INDEX ]</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Pre-launch Attribution Note */}
        <div className="pt-8 border-t border-[var(--border-subtle)] space-y-3 font-mono-ui text-[11px] text-[var(--muted)]">
          <p className="font-editorial-body text-xs text-[var(--muted)]/80 leading-relaxed">
            Legal Notice: Brand DNA is an independent reverse-engineering instrument and token workbench. Demo extractions and presets (including Stripe, Linear, and Vercel) are showcased strictly for technical reference. Brand DNA is not affiliated with, sponsored by, or endorsed by any brand analyzed. Output design tokens remain under the context of the respective rights holders.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div>
              [ SYSTEM ARCHITECT: Girish // Brand DNA Studio ]
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[10px]">
              <span>[ REACT 19 + VITE ]</span>
              <span>•</span>
              <span>[ SUPABASE + FIRECRAWL ]</span>
              <span>•</span>
              <span>[ GEMINI 3 FLASH ]</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
