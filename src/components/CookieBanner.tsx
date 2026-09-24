import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  onNavigate?: (path: string) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('brand_dna_cookie_consent');
      if (!consent) {
        // Delay slightly for smooth entrance
        const timer = setTimeout(() => setIsVisible(true), 900);
        return () => clearTimeout(timer);
      }
    } catch (_) {
      // Storage access disabled or blocked in iframe
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('brand_dna_cookie_consent', 'accepted');
    } catch (_) {}
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('brand_dna_cookie_consent', 'declined');
    } catch (_) {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      id="cookie-consent-banner"
      role="region"
      aria-label="Privacy & Session Disclosure"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-[var(--surface-raised)] border-t-2 border-[var(--border)] shadow-[0_-4px_24px_rgba(0,0,0,0.15)] animate-ink-bleed"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono-ui text-xs">
        {/* Notice Content */}
        <div className="flex items-start gap-3 flex-1 text-[var(--foreground)]">
          <span className="w-2.5 h-2.5 bg-[var(--accent)] mt-0.5 inline-block shrink-0" />
          <div className="space-y-1">
            <div className="font-bold tracking-[0.16em] uppercase flex items-center gap-2">
              <span>// SESSION PROTOCOL & TOKEN DISCLOSURE</span>
              <span className="text-[10px] px-1.5 py-0.5 border border-[var(--border-subtle)] text-[var(--muted)]">
                STRICT PRIVACY
              </span>
            </div>
            <p className="font-editorial-body text-xs text-[var(--muted)] leading-relaxed max-w-4xl">
              Brand DNA stores an anonymous UUID token locally to track your 5-extraction free tier quota and interface preferences. We share zero data with ad brokers. Raw text is processed exclusively via Lovable AI Gateway (Gemini 3 Flash) and Firecrawl for deterministic extraction.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full md:w-auto">
          {onNavigate ? (
            <button
              type="button"
              onClick={() => onNavigate('/privacy-policy')}
              className="btn-bracketed px-3 py-1.5 text-[10px] tracking-wider text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              [ PRIVACY POLICY ↗ ]
            </button>
          ) : (
            <a
              href="/privacy-policy"
              className="btn-bracketed px-3 py-1.5 text-[10px] tracking-wider text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              [ PRIVACY POLICY ↗ ]
            </a>
          )}

          <button
            type="button"
            onClick={handleDecline}
            className="btn-bracketed px-3 py-1.5 text-[10px] tracking-wider"
          >
            [ ESSENTIAL ONLY ]
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="btn-bracketed btn-bracketed-primary px-4 py-1.5 text-[10px] tracking-wider"
          >
            <span>[ ACKNOWLEDGE & CLOSE ]</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
