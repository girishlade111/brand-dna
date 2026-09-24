import React, { useState } from 'react';
import { brandPresets } from '../data/mockBrands.ts';
import { WorkbenchDemo } from '../components/WorkbenchDemo.tsx';
import type { BrandKitData } from '../types.ts';

interface ToolRoutesViewProps {
  route: 'build' | 'library' | 'compare' | 'design' | 'kit' | 'share';
  param?: string;
  onNavigate: (path: string) => void;
  onSelectBrand?: (brand: BrandKitData) => void;
}

export const ToolRoutesView: React.FC<ToolRoutesViewProps> = ({
  route,
  param,
  onNavigate,
  onSelectBrand
}) => {
  const [activeBrandA, setActiveBrandA] = useState<BrandKitData>(brandPresets['https://stripe.com']);
  const [activeBrandB, setActiveBrandB] = useState<BrandKitData>(brandPresets['https://linear.app']);

  if (route === 'share' || route === 'kit') {
    // If it's a share or kit route, show the shared kit view
    const brandName = param ? param.replace(/[-_]/g, ' ').toUpperCase() : 'SHARED BRAND KIT';
    const sampleBrand: BrandKitData = brandPresets['https://stripe.com'];

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-ink-bleed">
        {/* Banner */}
        <div className="p-4 mb-8 border border-[var(--border)] bg-[var(--surface-raised)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-ui text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
            <span className="text-[var(--foreground)] font-bold tracking-wider">
              {route === 'share' ? `PUBLIC SHARE RUNTIME // TOKEN: ${param || 'ANONYMOUS'}` : `KIT INSPECTOR // ID: ${param || 'CURRENT'}`}
            </span>
            <span className="text-[10px] px-2 py-0.5 bg-[var(--accent)] text-[var(--accent-fg)] font-bold">
              READ-ONLY SPECIMEN
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="btn-bracketed text-xs py-1.5"
            >
              [ OPEN IN ACTIVE WORKBENCH ↗ ]
            </button>
          </div>
        </div>

        <WorkbenchDemo brandData={sampleBrand} />
      </div>
    );
  }

  if (route === 'library') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-ink-bleed">
        <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-3">
          <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
          <span className="tracking-[0.2em] uppercase font-bold">
            // LOCAL & COMMUNITY SPECIMEN REPOSITORY
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-[var(--foreground)] mb-4">
          Brand DNA Library
        </h1>
        <p className="font-editorial-body text-base text-[var(--muted)] max-w-2xl mb-12">
          Curated index of verified brand extractions. All specimens audited for WCAG 2.1 AA/AAA luminance contrast, Google Fonts matching, and W3C token hierarchy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(brandPresets).map(([url, preset]) => (
            <div
              key={url}
              className="p-6 border border-[var(--border)] bg-[var(--surface-raised)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono-ui text-xs text-[var(--muted)] mb-3">
                  <span>{url.replace('https://', '')}</span>
                  <span className="text-[var(--accent)] font-bold">[ VERIFIED ]</span>
                </div>
                <h3 className="font-display text-2xl text-[var(--foreground)] mb-3">
                  {preset.name}
                </h3>
                <p className="font-editorial-body text-xs text-[var(--muted)] mb-6 line-clamp-2">
                  Voice: {preset.voice.archetype}. Keywords: {preset.voice.keywords.join(', ')}.
                </p>

                {/* Swatches preview */}
                <div className="flex h-6 border border-[var(--border)] mb-6">
                  {preset.palettes.slice(0, 5).map((p, idx) => (
                    <div
                      key={idx}
                      className="flex-1"
                      style={{ backgroundColor: p.hex }}
                      title={`${p.name} (${p.hex})`}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    if (onSelectBrand) onSelectBrand(preset);
                    onNavigate('/');
                  }}
                  className="btn-bracketed btn-bracketed-primary w-full text-xs"
                >
                  <span>[ LOAD INTO WORKBENCH ↗ ]</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (route === 'compare') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-ink-bleed">
        <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-3">
          <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
          <span className="tracking-[0.2em] uppercase font-bold">
            // VISUAL DIFF & SYSTEMIC CONTRAST MATRIX
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl font-light text-[var(--foreground)] mb-4">
          Brand Systems Compare
        </h1>
        <p className="font-editorial-body text-base text-[var(--muted)] max-w-2xl mb-12">
          Side-by-side chromatic divergence, typographic scale comparison, and tone keyword diffing across distinct production architectures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand A */}
          <div className="p-6 border-2 border-[var(--foreground)] bg-[var(--surface-raised)] space-y-4">
            <div className="flex items-center justify-between font-mono-ui text-xs">
              <span className="text-[var(--accent)] font-bold">// SPECIMEN A</span>
              <select
                aria-label="Select Specimen A for comparison"
                value={activeBrandA.url}
                onChange={(e) => setActiveBrandA(brandPresets[`https://${e.target.value}`] || brandPresets[e.target.value] || activeBrandA)}
                className="bg-[var(--surface)] border border-[var(--border)] px-2 py-1 text-xs font-mono-ui text-[var(--foreground)]"
              >
                <option value="https://stripe.com">Stripe Inc</option>
                <option value="https://linear.app">Linear App</option>
                <option value="https://vercel.com">Vercel Inc</option>
              </select>
            </div>
            <h2 className="font-display text-3xl text-[var(--foreground)]">{activeBrandA.name}</h2>
            <div className="font-mono-ui text-xs text-[var(--muted)]">VOICE: {activeBrandA.voice.archetype}</div>
            <div className="space-y-2 pt-2">
              {activeBrandA.palettes.slice(0, 4).map((p, i) => (
                <div key={i} className="flex items-center justify-between p-2 border border-[var(--border-subtle)] font-mono-ui text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--border)] inline-block" style={{ backgroundColor: p.hex }} />
                    <span className="text-[var(--foreground)]">{p.name}</span>
                  </div>
                  <span className="text-[var(--muted)]">{p.hex} • {p.ratio}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand B */}
          <div className="p-6 border-2 border-[var(--accent)] bg-[var(--surface)] space-y-4">
            <div className="flex items-center justify-between font-mono-ui text-xs">
              <span className="text-[var(--accent)] font-bold">// SPECIMEN B</span>
              <select
                aria-label="Select Specimen B for comparison"
                value={activeBrandB.url}
                onChange={(e) => setActiveBrandB(brandPresets[`https://${e.target.value}`] || brandPresets[e.target.value] || activeBrandB)}
                className="bg-[var(--surface-raised)] border border-[var(--border)] px-2 py-1 text-xs font-mono-ui text-[var(--foreground)]"
              >
                <option value="https://linear.app">Linear App</option>
                <option value="https://stripe.com">Stripe Inc</option>
                <option value="https://vercel.com">Vercel Inc</option>
              </select>
            </div>
            <h2 className="font-display text-3xl text-[var(--foreground)]">{activeBrandB.name}</h2>
            <div className="font-mono-ui text-xs text-[var(--muted)]">VOICE: {activeBrandB.voice.archetype}</div>
            <div className="space-y-2 pt-2">
              {activeBrandB.palettes.slice(0, 4).map((p, i) => (
                <div key={i} className="flex items-center justify-between p-2 border border-[var(--border-subtle)] font-mono-ui text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border border-[var(--border)] inline-block" style={{ backgroundColor: p.hex }} />
                    <span className="text-[var(--foreground)]">{p.name}</span>
                  </div>
                  <span className="text-[var(--muted)]">{p.hex} • {p.ratio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="btn-bracketed btn-bracketed-primary"
          >
            <span>[ RETURN TO RUNTIME WORKBENCH ↗ ]</span>
          </button>
        </div>
      </div>
    );
  }

  // Fallback to design specification view
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-ink-bleed">
      <div className="flex items-center gap-3 font-mono-ui text-xs text-[var(--accent)] mb-3">
        <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" />
        <span className="tracking-[0.2em] uppercase font-bold">
          // SPECIFICATION SPECIMEN DICTIONARY
        </span>
      </div>

      <h1 className="font-display text-4xl sm:text-6xl font-light text-[var(--foreground)] mb-4">
        W3C DTCG Token Specification
      </h1>
      <p className="font-editorial-body text-base text-[var(--muted)] max-w-2xl mb-8">
        Architecture rules, zero-radius constraint documentation, and design system compilation specs for Brand DNA.
      </p>

      <div className="p-6 border border-[var(--border)] bg-[var(--surface-raised)] font-mono-ui text-xs space-y-4">
        <div className="text-[var(--accent)] font-bold">// ZERO-RADIUS SYSTEM RULES</div>
        <p className="font-editorial-body text-sm text-[var(--muted)] leading-relaxed">
          In accordance with DESIGN.md, all UI components, buttons, specimen tiles, inputs, modal containers, and code blocks strictly employ 0px border radius. All contrast ratios conform to WCAG 2.1 AA/AAA mathematical luminance thresholds.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/')}
          className="btn-bracketed btn-bracketed-primary mt-4"
        >
          <span>[ RETURN TO RUNTIME WORKBENCH ↗ ]</span>
        </button>
      </div>
    </div>
  );
};
