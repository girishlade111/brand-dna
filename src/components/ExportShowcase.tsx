import React, { useState, useRef } from 'react';

const cssContent = `:root {
  /* Brand DNA // Extracted Tokens for Stripe */
  --color-primary: #0A0A0A;
  --color-accent: #635BFF;
  --color-surface: #F4EFE6;
  --color-surface-raised: #EDE8DE;
  --color-alert: #8B1A1A;

  /* Typography Scale */
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Libre Baskerville", serif;
  --font-mono: "Courier Prime", monospace;

  /* Spacing Scale */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;
  --space-16: 64px;

  /* Surface Rules */
  --radius: 0px;
  --border-width: 1px;
}`;

const tailwindContent = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#635BFF',
          ink: '#0A0A0A',
          washi: '#F4EFE6',
          surface: '#EDE8DE',
          hanko: '#8B1A1A'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Libre Baskerville"', 'serif'],
        mono: ['"Courier Prime"', 'monospace']
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px'
      }
    }
  }
};`;

const jsonContent = `{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "primary": { "$value": "#0A0A0A", "$type": "color" },
    "accent": { "$value": "#635BFF", "$type": "color" },
    "surface": { "$value": "#F4EFE6", "$type": "color" },
    "alert": { "$value": "#8B1A1A", "$type": "color" }
  },
  "typography": {
    "heading-1": {
      "fontFamily": { "$value": "Cormorant Garamond" },
      "fontSize": { "$value": "48px" },
      "fontWeight": { "$value": "600" },
      "letterSpacing": { "$value": "-0.02em" }
    }
  }
}`;

const designMdContent = `# BRAND DESIGN SYSTEM PROMPT (Extracted by Brand DNA)

## Visual Identity: Sumi Ink & Structural Minimalism
- **Canvas Base**: #F4EFE6 (Washi Paper)
- **Primary Ink**: #0A0A0A (Sumi Ink)
- **Brand Accent**: #635BFF (Indigo)
- **Hanko Seal**: #8B1A1A (Primary Action / Hover)
- **Border Radius**: 0px strictly. Never output rounded pills or arbitrary gradients.

## Core Directives
1. Use Cormorant Garamond for display headlines with tight tracking (-0.02em).
2. Use Courier Prime for all data chips, navigation links, and button labels.
3. Every button label must follow the bracketed format: [ ACTION ].
4. Verify all text against WCAG 2.1 AA/AAA relative luminance standards.`;

export const ExportShowcase: React.FC = () => {
  const [tab, setTab] = useState<'css' | 'tailwind' | 'tokens' | 'designmd'>('css');
  const [copied, setCopied] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const EXPORT_TABS = [
    { id: 'css', label: 'tokens.css' },
    { id: 'tailwind', label: 'tailwind.config.js' },
    { id: 'tokens', label: 'tokens.json' },
    { id: 'designmd', label: 'DESIGN.md' }
  ] as const;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (index + 1) % EXPORT_TABS.length;
      setTab(EXPORT_TABS[nextIdx].id);
      tabRefs.current[nextIdx]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (index - 1 + EXPORT_TABS.length) % EXPORT_TABS.length;
      setTab(EXPORT_TABS[prevIdx].id);
      tabRefs.current[prevIdx]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setTab(EXPORT_TABS[0].id);
      tabRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      setTab(EXPORT_TABS[EXPORT_TABS.length - 1].id);
      tabRefs.current[EXPORT_TABS.length - 1]?.focus();
    }
  };

  const getCode = () => {
    switch (tab) {
      case 'css':
        return cssContent;
      case 'tailwind':
        return tailwindContent;
      case 'tokens':
        return jsonContent;
      case 'designmd':
        return designMdContent;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filenameMap = {
      css: 'tokens.css',
      tailwind: 'tailwind.config.js',
      tokens: 'tokens.json',
      designmd: 'DESIGN.md'
    };
    const blob = new Blob([getCode()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filenameMap[tab];
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="exports" className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-[0.20em] mb-2">
              // ZERO RUNTIME OVERHEAD
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] tracking-[-0.01em]">
              Multi-Format Code Exports
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono-ui text-xs text-[var(--muted)]">
            TOKENS.CSS • TAILWIND.CONFIG.JS • TOKENS.JSON • DESIGN.MD • PDF
          </div>
        </div>

        {/* Code Viewer Container */}
        <div className="border border-[var(--border)] bg-[var(--surface-raised)]">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-2 sm:px-4">
            {/* Accessible Tablist */}
            <div
              role="tablist"
              aria-label="Export code formats"
              className="flex items-center text-[11px] font-mono-ui overflow-x-auto"
            >
              {EXPORT_TABS.map((item, idx) => {
                const isSelected = tab === item.id;
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    role="tab"
                    id={`export-tab-${item.id}`}
                    aria-selected={isSelected}
                    aria-controls={`export-panel-${item.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setTab(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`px-3 sm:px-4 py-3 border-r border-[var(--border)] tracking-[0.12em] uppercase font-bold transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A] focus-visible:outline-offset-[-2px] focus-visible:z-10 ${
                      isSelected
                        ? 'bg-[var(--foreground)] text-[var(--background)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 py-2">
              <button
                type="button"
                onClick={handleDownload}
                className="btn-bracketed text-[10px] py-1 px-3"
                aria-label={`Download ${tab} file`}
              >
                <span>[ DOWNLOAD FILE ]</span>
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-bracketed btn-bracketed-primary text-[10px] py-1 px-3"
                aria-label={copied ? 'Code copied to clipboard' : 'Copy code to clipboard'}
              >
                <span>{copied ? '[ ✓ COPIED TO CLIPBOARD ]' : '[ COPY TO CLIPBOARD ]'}</span>
              </button>
            </div>
          </div>

          {/* Code Body Tabpanel */}
          <div
            role="tabpanel"
            id={`export-panel-${tab}`}
            aria-labelledby={`export-tab-${tab}`}
            tabIndex={0}
            className="p-4 sm:p-6 bg-[var(--background)] focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A] focus-visible:outline-offset-[-2px]"
          >
            <pre className="font-mono-ui text-xs text-[var(--foreground)] overflow-x-auto leading-relaxed select-all">
              <code>{getCode()}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
