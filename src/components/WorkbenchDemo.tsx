import React, { useState, useRef } from 'react';
import type { BrandKitData, PaletteItem } from '../types.ts';

interface WorkbenchDemoProps {
  brandData: BrandKitData;
}

export const WorkbenchDemo: React.FC<WorkbenchDemoProps> = ({ brandData }) => {
  const [activeTab, setActiveTab] = useState<'palette' | 'typography' | 'logo' | 'voice' | 'tokens'>('palette');
  const [canvasTheme, setCanvasTheme] = useState<'washi' | 'midnight' | 'split'>('washi');
  const [specimenText, setSpecimenText] = useState('The invisible instrument of modern software craft.');
  const [logoMode, setLogoMode] = useState<'light' | 'dark' | 'mono'>('light');
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [currentHeadlineIdx, setCurrentHeadlineIdx] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const WORKBENCH_TABS = [
    { id: 'palette', label: '[ 01. PALETTE & CONTRAST ]' },
    { id: 'typography', label: '[ 02. TYPOGRAPHY ]' },
    { id: 'logo', label: '[ 03. LOGO STUDIO ]' },
    { id: 'voice', label: '[ 04. BRAND VOICE ]' },
    { id: 'tokens', label: '[ 05. DESIGN TOKENS ]' }
  ] as const;

  const headlineVariations = [
    brandData.voice.sampleHeadline,
    "Architectural elegance synthesized from ambient web signals.",
    "Deterministic design infrastructure, built for high-tempo engineering teams.",
    "Zero-friction brand continuity across every client touchpoint."
  ];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const nextHeadline = () => {
    setCurrentHeadlineIdx((prev) => (prev + 1) % headlineVariations.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIdx = (index + 1) % WORKBENCH_TABS.length;
      setActiveTab(WORKBENCH_TABS[nextIdx].id);
      tabRefs.current[nextIdx]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIdx = (index - 1 + WORKBENCH_TABS.length) % WORKBENCH_TABS.length;
      setActiveTab(WORKBENCH_TABS[prevIdx].id);
      tabRefs.current[prevIdx]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActiveTab(WORKBENCH_TABS[0].id);
      tabRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      setActiveTab(WORKBENCH_TABS[WORKBENCH_TABS.length - 1].id);
      tabRefs.current[WORKBENCH_TABS.length - 1]?.focus();
    }
  };

  return (
    <section id="workbench" className="py-16 md:py-24 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[var(--border-subtle)]">
          <div>
            <div className="font-mono-ui text-xs text-[var(--muted)] uppercase tracking-[0.20em] mb-2">
              // LIVE INTERACTIVE WORKBENCH
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] tracking-[-0.01em]">
              Simulated Extraction Engine
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono-ui text-xs text-[var(--muted)] flex flex-col md:items-end gap-1.5">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 bg-emerald-600 animate-pulse" />
              <span>
                STREAMING TOKENS FOR: <strong className="text-[var(--foreground)]">{brandData.url}</strong>
              </span>
            </div>
            {/* Disclaimer in header */}
            <div className="text-[10px] tracking-wider uppercase text-[var(--muted)] opacity-80">
              Demo extractions only — not affiliated with or endorsed by the brands shown.
            </div>
          </div>
        </div>

        {/* Workbench Container Frame (0px radius, sharp surgical border) */}
        <div className="border border-[var(--border)] bg-[var(--surface-raised)] shadow-sm">
          {/* Top Control Bar: Tabs + Light/Dark Canvas Theme Switcher */}
          <div className="flex flex-wrap items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] text-[11px] font-mono-ui">
            {/* Accessible Tablist */}
            <div
              role="tablist"
              aria-label="Workbench extraction components"
              className="flex items-center overflow-x-auto max-w-full sm:flex-wrap text-[10px] sm:text-[11px] whitespace-nowrap scrollbar-thin"
            >
              {WORKBENCH_TABS.map((tab, idx) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    role="tab"
                    id={`workbench-tab-${tab.id}`}
                    aria-selected={isSelected}
                    aria-controls={`workbench-panel-${tab.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => setActiveTab(tab.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`px-4 py-3 border-r border-[var(--border)] tracking-[0.14em] uppercase font-bold transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A] focus-visible:outline-offset-[-2px] focus-visible:z-10 ${
                      isSelected
                        ? 'bg-[var(--foreground)] text-[var(--background)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Specimen Canvas Light/Dark Mode Preview Switcher */}
            <div className="flex items-center gap-1 px-3 py-2 border-t md:border-t-0 md:border-l border-[var(--border)]">
              <span className="text-[10px] text-[var(--muted)] mr-2 select-none uppercase tracking-wider">
                CANVAS THEME:
              </span>
              <button
                type="button"
                onClick={() => setCanvasTheme('washi')}
                className={`px-2 py-0.5 border text-[10px] transition-colors ${
                  canvasTheme === 'washi'
                    ? 'border-[#8B1A1A] bg-[#F4EFE6] text-[#0A0A0A] font-bold shadow-xs'
                    : 'border-[var(--border-subtle)] text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
                aria-label="Preview in light Washi Paper mode"
              >
                [ WASHI (#F4EFE6) ]
              </button>
              <button
                type="button"
                onClick={() => setCanvasTheme('midnight')}
                className={`px-2 py-0.5 border text-[10px] transition-colors ${
                  canvasTheme === 'midnight'
                    ? 'border-[#8B1A1A] bg-[#0A0A0A] text-[#F4EFE6] font-bold shadow-xs'
                    : 'border-[var(--border-subtle)] text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
                aria-label="Preview in dark Midnight Sumi mode"
              >
                [ MIDNIGHT (#0A0A0A) ]
              </button>
              <button
                type="button"
                onClick={() => setCanvasTheme('split')}
                className={`hidden sm:inline-block px-2 py-0.5 border text-[10px] transition-colors ${
                  canvasTheme === 'split'
                    ? 'border-[#8B1A1A] bg-[var(--surface-raised)] text-[var(--foreground)] font-bold'
                    : 'border-[var(--border-subtle)] text-[var(--muted)] hover:text-[var(--foreground)]'
                }`}
                aria-label="Preview in split comparison mode"
              >
                [ SPLIT ]
              </button>
            </div>
          </div>

          {/* Tab 1: Palette & WCAG Contrast Matrix */}
          {activeTab === 'palette' && (
            <div
              role="tabpanel"
              id="workbench-panel-palette"
              aria-labelledby="workbench-tab-palette"
              tabIndex={0}
              className={`p-6 sm:p-8 animate-ink-bleed focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A] ${
                canvasTheme === 'washi'
                  ? 'bg-[#F4EFE6] text-[#0A0A0A]'
                  : canvasTheme === 'midnight'
                  ? 'bg-[#0A0A0A] text-[#F4EFE6]'
                  : 'bg-[var(--background)] text-[var(--foreground)]'
              }`}
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl text-current mb-1">
                    Extracted Chromatic Matrix & WCAG 2.1 Audit
                  </h3>
                  <p className="font-editorial-body text-xs opacity-80">
                    Each color is clustered by spatial frequency and verified against pure sumi (#0A0A0A) and washi (#F4EFE6).
                  </p>
                </div>
                <span className="font-mono-ui text-[11px] opacity-70">
                  {copiedHex ? `[ ✓ COPIED ${copiedHex} ]` : '[ CLICK HEX TO COPY ]'}
                </span>
              </div>

              {/* Split Mode or Standard Grid */}
              {canvasTheme === 'split' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Washi Canvas Preview */}
                  <div className="p-4 border border-[#D6CFBF] bg-[#F4EFE6] text-[#0A0A0A]">
                    <div className="font-mono-ui text-[10px] uppercase tracking-wider text-[#8B1A1A] font-bold mb-3">
                      [ SPECIMEN: WASHI PAPER BASE — #F4EFE6 ]
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {brandData.palettes.map((p) => (
                        <div
                          key={`washi-${p.name}`}
                          onClick={() => handleCopyHex(p.hex)}
                          className="border border-[#D6CFBF] p-3 cursor-pointer hover:border-[#0A0A0A] transition-colors bg-[#EDE8DE]"
                        >
                          <div className="w-full h-10 mb-2 border border-black/10" style={{ backgroundColor: p.hex }} />
                          <div className="font-mono-ui text-[11px] font-bold">{p.name}</div>
                          <div className="font-mono-ui text-[10px] opacity-75">{p.hex}</div>
                          <div className="mt-1 font-mono-ui text-[9px] text-[#8B1A1A] font-bold">{p.badge}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Midnight Canvas Preview */}
                  <div className="p-4 border border-[#222222] bg-[#0A0A0A] text-[#F4EFE6]">
                    <div className="font-mono-ui text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-3">
                      [ SPECIMEN: MIDNIGHT SUMI BASE — #0A0A0A ]
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {brandData.palettes.map((p) => (
                        <div
                          key={`midnight-${p.name}`}
                          onClick={() => handleCopyHex(p.hex)}
                          className="border border-[#2A2A2A] p-3 cursor-pointer hover:border-[#F4EFE6] transition-colors bg-[#141414]"
                        >
                          <div className="w-full h-10 mb-2 border border-white/10" style={{ backgroundColor: p.hex }} />
                          <div className="font-mono-ui text-[11px] font-bold">{p.name}</div>
                          <div className="font-mono-ui text-[10px] opacity-75">{p.hex}</div>
                          <div className="mt-1 font-mono-ui text-[9px] text-emerald-400 font-bold">{p.badge}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {brandData.palettes.map((p: PaletteItem) => (
                    <div
                      key={p.name}
                      onClick={() => handleCopyHex(p.hex)}
                      className="border border-current/20 p-4 transition-all hover:-translate-y-0.5 cursor-pointer group bg-black/5 dark:bg-white/5"
                    >
                      <div
                        className="w-full h-20 mb-3 border border-current/20 flex items-end p-2 relative overflow-hidden"
                        style={{ backgroundColor: p.hex }}
                      >
                        <span className="font-mono-ui text-[9px] px-1 bg-black/75 text-white">
                          {p.luminance}
                        </span>
                      </div>
                      <div className="font-mono-ui text-xs font-bold text-current">{p.name}</div>
                      <div className="font-mono-ui text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                        {p.hex}
                      </div>
                      <div className="mt-2 pt-2 border-t border-current/20 flex items-center justify-between font-mono-ui text-[10px]">
                        <span className="opacity-60">{p.role}</span>
                        <span className="text-[var(--accent)] font-bold">{p.badge}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Typography Hierarchy Specimen */}
          {activeTab === 'typography' && (
            <div
              role="tabpanel"
              id="workbench-panel-typography"
              aria-labelledby="workbench-tab-typography"
              tabIndex={0}
              className={`p-6 sm:p-8 animate-ink-bleed focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A] ${
                canvasTheme === 'washi'
                  ? 'bg-[#F4EFE6] text-[#0A0A0A]'
                  : canvasTheme === 'midnight'
                  ? 'bg-[#0A0A0A] text-[#F4EFE6]'
                  : 'bg-[var(--background)] text-[var(--foreground)]'
              }`}
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-current mb-1">
                    Computed Type Scale & Optical Font Mapping
                  </h3>
                  <p className="font-editorial-body text-xs opacity-80">
                    Detected via DOM computed styles and mapped to Google Fonts and system fallbacks.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-ui text-xs opacity-70 select-none">SAMPLE:</span>
                  <input
                    type="text"
                    value={specimenText}
                    onChange={(e) => setSpecimenText(e.target.value)}
                    className="border border-current/30 px-3 py-1 font-mono-ui text-xs bg-transparent text-current focus:outline-none w-64"
                    aria-label="Editable typography sample text"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {brandData.typography.map((t) => (
                  <div key={t.label} className="border-b border-current/20 pb-4">
                    <div className="flex items-center justify-between font-mono-ui text-[11px] opacity-70 mb-2">
                      <span>{t.label} — {t.font} ({t.size} / {t.weight})</span>
                      <span className="uppercase">[ EXTRACTED COMPONENT ]</span>
                    </div>
                    <div
                      style={{
                        fontFamily: t.font.includes('Garamond')
                          ? 'Cormorant Garamond, serif'
                          : t.font.includes('Courier')
                          ? 'Courier Prime, monospace'
                          : 'Libre Baskerville, serif',
                        fontSize: t.size,
                        fontWeight: t.weight === '600' ? 600 : t.weight === '700' ? 700 : 400
                      }}
                      className="text-current leading-tight truncate"
                    >
                      {specimenText || t.sample}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Vector Logo Variants */}
          {activeTab === 'logo' && (
            <div
              role="tabpanel"
              id="workbench-panel-logo"
              aria-labelledby="workbench-tab-logo"
              tabIndex={0}
              className="p-6 sm:p-8 animate-ink-bleed focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A]"
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-[var(--foreground)] mb-1">
                    Extracted Vector Logotype & Isolated Mark
                  </h3>
                  <p className="font-editorial-body text-xs text-[var(--muted)]">
                    Scraped from DOM inline SVGs and header assets. Tested across light, dark, and monochrome contexts.
                  </p>
                </div>
                <div className="flex items-center gap-1 font-mono-ui text-xs">
                  <button
                    type="button"
                    onClick={() => setLogoMode('light')}
                    className={`px-3 py-1 border transition-colors ${
                      logoMode === 'light'
                        ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                        : 'border-[var(--border-subtle)] text-[var(--muted)]'
                    }`}
                  >
                    [ WASHI LIGHT ]
                  </button>
                  <button
                    type="button"
                    onClick={() => setLogoMode('dark')}
                    className={`px-3 py-1 border transition-colors ${
                      logoMode === 'dark'
                        ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                        : 'border-[var(--border-subtle)] text-[var(--muted)]'
                    }`}
                  >
                    [ MIDNIGHT DARK ]
                  </button>
                  <button
                    type="button"
                    onClick={() => setLogoMode('mono')}
                    className={`px-3 py-1 border transition-colors ${
                      logoMode === 'mono'
                        ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]'
                        : 'border-[var(--border-subtle)] text-[var(--muted)]'
                    }`}
                  >
                    [ MONOCHROME ]
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Wordmark Canvas */}
                <div
                  className={`border border-[var(--border)] p-8 flex flex-col items-center justify-center min-h-[220px] transition-colors duration-200 ${
                    logoMode === 'dark'
                      ? 'bg-[#0A0A0A] text-[#F4EFE6]'
                      : logoMode === 'mono'
                      ? 'bg-[#FFFFFF] text-[#000000]'
                      : 'bg-[#F4EFE6] text-[#0A0A0A]'
                  }`}
                >
                  <svg className="w-52 h-16 fill-current mb-4" viewBox="0 0 120 40">
                    <path d="M12 12c-4 0-7 2-7 6s3 5 8 7c6 2 9 4 9 9 0 5-4 8-10 8-5 0-9-2-11-5l3-3c2 2 5 4 8 4 3 0 5-1 5-4 0-2-2-4-7-6-5-2-10-4-10-9 0-5 4-8 10-8 4 0 8 2 10 4l-3 3c-2-2-4-3-7-3zm20-8h4v34h-4zm14 9h4v25h-4zm15 0h4v4h-4zm0 6h4v19h-4zm15-6h4v3h-4v7c0 3 1 4 4 4 1 0 2 0 3-1l1 3c-1 1-3 1-5 1-4 0-7-2-7-7v-7h-4v-3h4v-5h4v5zm16 0h4v3h-4v22h-4zm12 0c6 0 10 4 10 13 0 1 0 2-1 2h-15c0 5 3 7 7 7 3 0 5-1 6-3l3 2c-2 3-5 5-9 5-8 0-13-5-13-13 0-7 5-13 12-13zm-6 9h11c0-4-2-6-5-6s-5 2-6 6z" />
                  </svg>
                  <span className="font-mono-ui text-[10px] tracking-[0.2em] opacity-60">
                    [ WORDMARK & LOGOTYPE — SVG ]
                  </span>
                </div>

                {/* Isolated Glyphs Canvas */}
                <div
                  className={`border border-[var(--border)] p-8 flex flex-col items-center justify-center min-h-[220px] transition-colors duration-200 ${
                    logoMode === 'dark'
                      ? 'bg-[#141414] text-[#F4EFE6]'
                      : logoMode === 'mono'
                      ? 'bg-[#F0F0F0] text-[#000000]'
                      : 'bg-[#EDE8DE] text-[#0A0A0A]'
                  }`}
                >
                  <div className="w-16 h-16 border-2 border-current flex items-center justify-center font-display text-4xl italic font-bold mb-4">
                    S
                  </div>
                  <span className="font-mono-ui text-[10px] tracking-[0.2em] opacity-60">
                    [ EXTRACTED STANDALONE MARK — GLYPH ]
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Brand Voice Synthesis */}
          {activeTab === 'voice' && (
            <div
              role="tabpanel"
              id="workbench-panel-voice"
              aria-labelledby="workbench-tab-voice"
              tabIndex={0}
              className="p-6 sm:p-8 animate-ink-bleed focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A]"
            >
              <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-[var(--foreground)] mb-1">
                    Brand Voice & Editorial Vocabulary Synthesis
                  </h3>
                  <p className="font-editorial-body text-xs text-[var(--muted)]">
                    Synthesized by Gemini 3 Flash scanning domain prose, companion pages (/about, /terms), and marketing copy.
                  </p>
                  {/* Trademark / Affiliation Disclaimer in Brand Voice Output */}
                  <div className="mt-2 font-mono-ui text-[10px] text-[var(--muted)] tracking-wider uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] inline-block select-none" />
                    <span>Demo extractions only — not affiliated with or endorsed by the brands shown.</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={nextHeadline}
                  className="btn-bracketed text-[10px] py-1 px-3 self-start sm:self-auto"
                >
                  <span>[ CYCLE SAMPLE COPY ]</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Voice Attributes */}
                <div className="border border-[var(--border-subtle)] p-6 bg-[var(--background)]">
                  <div className="font-mono-ui text-[11px] text-[var(--muted)] uppercase tracking-wider mb-2">
                    [ ARCHETYPE & TONE ]
                  </div>
                  <div className="font-display text-2xl text-[var(--foreground)] mb-4">
                    {brandData.voice.archetype}
                  </div>

                  <div className="font-mono-ui text-[11px] text-[var(--muted)] uppercase tracking-wider mb-2">
                    [ DOMAIN VOCABULARY ]
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {brandData.voice.keywords.map((k) => (
                      <span
                        key={k}
                        className="font-mono-ui text-xs px-2 py-1 border border-[var(--border-subtle)] bg-[var(--surface)] text-[var(--foreground)]"
                      >
                        {k}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono-ui text-[11px] text-[var(--muted)] uppercase tracking-wider mb-2">
                    [ SYNTHESIZED LEAD COPY SPECIMEN ]
                  </div>
                  <blockquote className="font-editorial-body italic text-base text-[var(--foreground)] border-l-2 border-[var(--accent)] pl-3 py-1 mb-2">
                    "{headlineVariations[currentHeadlineIdx]}"
                  </blockquote>
                  <div className="font-mono-ui text-[9px] text-[var(--muted)] uppercase">
                    Specimen synthesized based on public copy styles. Not endorsed by brand owner.
                  </div>
                </div>

                {/* Strict Dos and Don'ts */}
                <div className="border border-[var(--border-subtle)] p-6 bg-[var(--background)] flex flex-col justify-between">
                  <div>
                    <div className="font-mono-ui text-[11px] text-emerald-700 dark:text-emerald-400 uppercase tracking-wider mb-2">
                      [ ✓ COPYWRITING MANDATES (DO) ]
                    </div>
                    <ul className="space-y-2 mb-6 font-editorial-body text-xs text-[var(--foreground)]">
                      {brandData.voice.dos.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="font-mono-ui text-emerald-600 font-bold">›</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="font-mono-ui text-[11px] text-[var(--accent)] uppercase tracking-wider mb-2">
                      [ ✕ ANTI-PATTERNS & BANNED TERMS (DON'T) ]
                    </div>
                    <ul className="space-y-2 font-editorial-body text-xs text-[var(--foreground)]">
                      {brandData.voice.donts.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="font-mono-ui text-[var(--accent)] font-bold">✕</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Design Tokens JSON */}
          {activeTab === 'tokens' && (
            <div
              role="tabpanel"
              id="workbench-panel-tokens"
              aria-labelledby="workbench-tab-tokens"
              tabIndex={0}
              className="p-6 sm:p-8 animate-ink-bleed focus:outline-none focus-visible:outline-2 focus-visible:outline-[#8B1A1A]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-2xl text-[var(--foreground)]">
                  W3C Design Tokens Community Group Specification
                </h3>
                <span className="font-mono-ui text-[11px] text-[var(--muted)]">
                  [ FORMAT: W3C DTCG SPEC ]
                </span>
              </div>
              <pre className="bg-[var(--background)] p-4 sm:p-6 border border-[var(--border-subtle)] font-mono-ui text-xs text-[var(--foreground)] overflow-x-auto leading-relaxed select-all">
{`{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "ink": { "$value": "#0A0A0A", "$type": "color" },
    "washi": { "$value": "#F4EFE6", "$type": "color" },
    "brand": { "$value": "#635BFF", "$type": "color" },
    "surface": { "$value": "#EDE8DE", "$type": "color" },
    "hanko": { "$value": "#8B1A1A", "$type": "color" }
  },
  "spacing": {
    "scale-1": { "$value": "4px", "$type": "dimension" },
    "scale-2": { "$value": "8px", "$type": "dimension" },
    "scale-4": { "$value": "16px", "$type": "dimension" },
    "scale-8": { "$value": "32px", "$type": "dimension" },
    "scale-16": { "$value": "64px", "$type": "dimension" }
  },
  "elevation": {
    "flat": { "$value": "none", "$type": "shadow" },
    "paper": { "$value": "0 1px 3px rgba(10,10,10,0.06)", "$type": "shadow" }
  },
  "border": {
    "width": { "$value": "1px", "$type": "dimension" },
    "radius": { "$value": "0px", "$type": "dimension" }
  }
}`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
