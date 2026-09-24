import React, { useState } from 'react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  appUrl: string;
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  appUrl,
  onNavigate,
  currentPath = '/'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, path: string, hash?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigate) {
      if (path !== currentPath) {
        onNavigate(path);
      }
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 w-full bg-[var(--background)]/90 backdrop-blur-[18px] border-b border-[var(--border-subtle)] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Title */}
        <a
          href="/"
          id="header-brand-link"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-3 no-underline text-[var(--foreground)] group"
        >
          <span className="w-2.5 h-2.5 bg-[var(--foreground)] inline-block transition-transform duration-200 group-hover:scale-125" />
          <span className="font-mono-ui text-xs font-bold tracking-[0.20em] uppercase text-[var(--foreground)]">
            BRAND DNA <span className="text-[var(--muted)]">//</span> THE INVISIBLE INSTRUMENT
          </span>
        </a>

        {/* Desktop Navigation Anchors */}
        <nav
          id="header-nav-anchors"
          className="hidden lg:flex items-center gap-6 font-mono-ui text-[11px] tracking-[0.14em] uppercase text-[var(--muted)]"
        >
          <a
            href="#ingestion"
            onClick={(e) => handleLinkClick(e, '/', '#ingestion')}
            className="hover:text-[var(--foreground)] transition-colors"
          >
            // 01. INGESTION
          </a>
          <a
            href="#workbench"
            onClick={(e) => handleLinkClick(e, '/', '#workbench')}
            className="hover:text-[var(--foreground)] transition-colors"
          >
            // 02. COLOR MATRIX
          </a>
          <a
            href="#typography"
            onClick={(e) => handleLinkClick(e, '/', '#typography')}
            className="hover:text-[var(--foreground)] transition-colors"
          >
            // 03. TYPOGRAPHY
          </a>
          <a
            href="#exports"
            onClick={(e) => handleLinkClick(e, '/', '#exports')}
            className="hover:text-[var(--foreground)] transition-colors"
          >
            // 04. EXPORTS
          </a>
          <a
            href="#architecture"
            onClick={(e) => handleLinkClick(e, '/', '#architecture')}
            className="hover:text-[var(--foreground)] transition-colors"
          >
            // 05. ARCHITECTURE
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Theme Toggle Switch */}
          <button
            id="theme-toggle-button"
            type="button"
            onClick={onToggleTheme}
            className="btn-bracketed px-2.5 sm:px-3 py-1.5 text-[10px]"
            aria-label="Toggle Color Theme"
          >
            <span className="tracking-[0.15em] hidden sm:inline">
              {theme === 'dark' ? '[ MODE: MIDNIGHT ]' : '[ MODE: WASHI ]'}
            </span>
            <span className="tracking-[0.15em] sm:hidden">
              {theme === 'dark' ? '[ MIDNIGHT ]' : '[ WASHI ]'}
            </span>
          </button>

          {/* Primary CTA Redirect Button */}
          <a
            id="header-launch-cta"
            href={appUrl}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/build');
              }
            }}
            className="btn-bracketed btn-bracketed-primary text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1.5"
          >
            <span>[ LAUNCH APP ↗ ]</span>
          </a>

          {/* Mobile Menu Hamburger Toggle (visible on < lg) */}
          <button
            id="mobile-menu-toggle-button"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden btn-bracketed px-2.5 py-1.5 text-[10px] tracking-wider"
          >
            <span>{mobileMenuOpen ? '[ CLOSE ✕ ]' : '[ MENU ☰ ]'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (visible when mobileMenuOpen is true) */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden w-full bg-[var(--surface-raised)] border-b-2 border-[var(--border)] px-4 py-6 font-mono-ui text-xs animate-ink-bleed"
        >
          <div className="space-y-4 max-w-7xl mx-auto">
            <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--accent)] font-bold pb-2 border-b border-[var(--border-subtle)]">
              // WORKBENCH PIPELINE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <a
                href="#ingestion"
                onClick={(e) => handleLinkClick(e, '/', '#ingestion')}
                className="p-2 border border-[var(--border-subtle)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] text-[var(--foreground)] block"
              >
                // 01. INGESTION & PIPELINE
              </a>
              <a
                href="#workbench"
                onClick={(e) => handleLinkClick(e, '/', '#workbench')}
                className="p-2 border border-[var(--border-subtle)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] text-[var(--foreground)] block"
              >
                // 02. COLOR MATRIX & WCAG
              </a>
              <a
                href="#typography"
                onClick={(e) => handleLinkClick(e, '/', '#typography')}
                className="p-2 border border-[var(--border-subtle)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] text-[var(--foreground)] block"
              >
                // 03. TYPOGRAPHY HIERARCHY
              </a>
              <a
                href="#exports"
                onClick={(e) => handleLinkClick(e, '/', '#exports')}
                className="p-2 border border-[var(--border-subtle)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] text-[var(--foreground)] block"
              >
                // 04. MULTI-FORMAT EXPORTS
              </a>
              <a
                href="#architecture"
                onClick={(e) => handleLinkClick(e, '/', '#architecture')}
                className="p-2 border border-[var(--border-subtle)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] text-[var(--foreground)] block"
              >
                // 05. ARCHITECTURE & SPEC
              </a>
            </div>

            <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--muted)] font-bold pt-2 pb-1 border-b border-[var(--border-subtle)]">
              // SITE INDEX & LEGAL
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/about')}
                className="p-2 border border-[var(--border-subtle)] text-left hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                [ ABOUT INSTRUMENT ]
              </button>
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/library')}
                className="p-2 border border-[var(--border-subtle)] text-left hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                [ SPECIMEN LIBRARY ]
              </button>
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/compare')}
                className="p-2 border border-[var(--border-subtle)] text-left hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                [ BRAND COMPARE ]
              </button>
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="p-2 border border-[var(--border-subtle)] text-left hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                [ CONTACT DESK ]
              </button>
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                className="p-2 border border-[var(--border-subtle)] text-left hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                [ PRIVACY POLICY ]
              </button>
              <button
                type="button"
                onClick={(e) => handleLinkClick(e, '/terms-and-conditions')}
                className="p-2 border border-[var(--border-subtle)] text-left hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                [ TERMS & CONDITIONS ]
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
