import React from 'react';

interface CtaBannerProps {
  appUrl: string;
  onNavigate?: (path: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ appUrl, onNavigate }) => {
  return (
    <section className="py-20 md:py-28 bg-[var(--surface)] border-t border-b border-[var(--border)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-[0.20em] mb-4">
            // INITIATE EXTRACTION WORKFLOW
          </div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[var(--foreground)] tracking-[-0.02em] leading-tight mb-6">
            "The brief is already out there."
          </h2>
          <p className="font-editorial-body text-lg sm:text-xl text-[var(--muted)] max-w-xl mx-auto mb-10">
            Every competitor's colors, every font, every token — one URL away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="cta-launch-button"
              href={appUrl}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/build');
                }
              }}
              className="btn-bracketed btn-bracketed-primary text-xs py-3 px-8 text-center"
            >
              <span>[ LAUNCH THE INSTRUMENT ↗ ]</span>
            </a>
            <a
              href="#workbench"
              onClick={(e) => {
                e.preventDefault();
                const wb = document.getElementById('workbench');
                if (wb) wb.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-bracketed text-xs py-3 px-6 text-center"
            >
              <span>[ EXPLORE DEMO WORKBENCH ]</span>
            </a>
          </div>

          <div className="mt-8 font-mono-ui text-[11px] text-[var(--muted)]">
            FREE TIER INCLUDES 5 INSTANT URL EXTRACTIONS & FULL W3C TOKEN EXPORTS
          </div>
        </div>
      </div>
    </section>
  );
};
