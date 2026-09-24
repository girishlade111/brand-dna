import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { SocialProofStrip } from './components/SocialProofStrip.tsx';
import { WorkbenchDemo } from './components/WorkbenchDemo.tsx';
import { FeatureMatrix } from './components/FeatureMatrix.tsx';
import { ExportShowcase } from './components/ExportShowcase.tsx';
import { Architecture } from './components/Architecture.tsx';
import { Comparison } from './components/Comparison.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { Footer } from './components/Footer.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';

import { AboutPage } from './pages/AboutPage.tsx';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { ToolRoutesView } from './pages/ToolRoutesView.tsx';

import { brandPresets } from './data/mockBrands.ts';
import { useSEO } from './hooks/useSEO.ts';
import type { BrandKitData, ExtractionError, ExtractionProgress, RouteState } from './types.ts';

function parseLocation(pathname: string): RouteState {
  const clean = pathname.replace(/\/+$/, '') || '/';

  if (clean === '/' || clean === '') {
    return { path: '/', name: 'home' };
  }
  if (clean === '/about') {
    return { path: '/about', name: 'about' };
  }
  if (clean === '/privacy-policy') {
    return { path: '/privacy-policy', name: 'privacy' };
  }
  if (clean === '/terms-and-conditions' || clean === '/terms') {
    return { path: '/terms-and-conditions', name: 'terms' };
  }
  if (clean === '/contact' || clean === '/support') {
    return { path: '/contact', name: 'contact' };
  }
  if (clean === '/build') {
    return { path: '/build', name: 'build' };
  }
  if (clean === '/library') {
    return { path: '/library', name: 'library' };
  }
  if (clean === '/compare') {
    return { path: '/compare', name: 'compare' };
  }
  if (clean === '/design') {
    return { path: '/design', name: 'design' };
  }

  // Kit dynamic route
  const kitMatch = clean.match(/^\/kit\/([^/]+)$/);
  if (kitMatch) {
    const kitId = kitMatch[1];
    if (kitId === 'error' || kitId === 'invalid' || kitId === '404') {
      return { path: clean, name: '404', isNotFound: true, notFoundReason: 'kit_id', param: kitId };
    }
    return { path: clean, name: 'kit', param: kitId };
  }

  // Share dynamic route
  const shareMatch = clean.match(/^\/share\/([^/]+)$/);
  if (shareMatch) {
    const token = shareMatch[1];
    if (token === 'error' || token === 'invalid' || token === '404') {
      return { path: clean, name: '404', isNotFound: true, notFoundReason: 'share_token', param: token };
    }
    return { path: clean, name: 'share', param: token };
  }

  if (clean === '/404') {
    return { path: '/404', name: '404', isNotFound: true, notFoundReason: 'route' };
  }

  // Unmatched route fallback
  return { path: clean, name: '404', isNotFound: true, notFoundReason: 'route' };
}

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentRoute, setCurrentRoute] = useState<RouteState>(() => parseLocation(window.location.pathname));
  const [selectedBrand, setSelectedBrand] = useState<BrandKitData>(brandPresets['https://stripe.com']);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const [extractionProgress, setExtractionProgress] = useState<ExtractionProgress | null>(null);
  const [extractionError, setExtractionError] = useState<ExtractionError | null>(null);

  const appUrl =
    (import.meta.env.VITE_PUBLIC_APP_URL as string | undefined) ||
    (import.meta.env.PUBLIC_APP_URL as string | undefined) ||
    '/build';

  // Navigation handler
  const navigate = useCallback((targetPath: string) => {
    try {
      window.history.pushState(null, '', targetPath);
    } catch (_) {}
    setCurrentRoute(parseLocation(targetPath));
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (_) {}
  }, []);

  // Listen to popstate (back/forward browser navigation)
  useEffect(() => {
    const handlePopState = () => {
      try {
        setCurrentRoute(parseLocation(window.location.pathname));
      } catch (_) {}
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initialize theme from storage or system preference
  useEffect(() => {
    let savedTheme: 'light' | 'dark' | null = null;
    try {
      savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    } catch (_) {}
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    if (initial === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (_) {}
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  // Synchronize Per-Page SEO Metadata, Canonical URLs & OpenGraph tags
  useSEO(currentRoute);

  const handleExtract = (url: string) => {
    setExtractionError(null);
    const normalized = url.toLowerCase().trim();

    // Check for simulated error / SSRF conditions
    if (
      normalized.includes('localhost') ||
      normalized.includes('127.0.0.1') ||
      normalized.includes('192.168.') ||
      normalized.includes('10.0.') ||
      normalized.includes('error') ||
      normalized.includes('fail')
    ) {
      setIsExtracting(false);
      setExtractionError({
        code: normalized.includes('localhost') || normalized.includes('127.0.0.1') ? 'SSRF_BLOCKED' : 'EXTRACTION_REJECTED',
        title: 'Target Endpoint Rejected by Security Gateway',
        message: 'Cloudflare Workers and headless browser runners block internal IP ranges and loopback domains to prevent SSRF vulnerabilities.',
        details: 'Please enter a public HTTPS target domain or test with one of the curated presets (Stripe, Linear, Vercel).',
        targetUrl: url
      });
      return;
    }

    setIsExtracting(true);

    // 5-step pipeline progression
    const steps: ExtractionProgress[] = [
      {
        step: 1,
        totalSteps: 5,
        stepName: 'INGESTION & SSRF VALIDATION',
        description: 'Verifying domain DNS, SSL certificates, and dispatching headless Chromium crawler...',
        percent: 20
      },
      {
        step: 2,
        totalSteps: 5,
        stepName: 'COMPUTED FONT & DOM TRACING',
        description: 'Capturing active styles, CSS custom properties, and logotype SVG vectors...',
        percent: 40
      },
      {
        step: 3,
        totalSteps: 5,
        stepName: 'CHROMATIC CLUSTERING & WCAG MATRIX',
        description: 'Auditing foreground/background contrast ratios against ISO 9241-391 standards...',
        percent: 65
      },
      {
        step: 4,
        totalSteps: 5,
        stepName: 'GEMINI 3 FLASH BRAND SYNTHESIS',
        description: 'Synthesizing voice archetype, domain keywords, and strict copywriting mandates...',
        percent: 85
      },
      {
        step: 5,
        totalSteps: 5,
        stepName: 'W3C DTCG TOKEN COMPILATION',
        description: 'Generating tokens.css, tailwind.config.js, tokens.json, and DESIGN.md...',
        percent: 100
      }
    ];

    let currentStepIdx = 0;
    setExtractionProgress(steps[0]);

    const stepInterval = setInterval(() => {
      currentStepIdx += 1;
      if (currentStepIdx < steps.length) {
        setExtractionProgress(steps[currentStepIdx]);
      } else {
        clearInterval(stepInterval);

        // Find matching preset or generate dynamic brand kit
        let matched = brandPresets['https://stripe.com'];

        if (normalized.includes('linear')) {
          matched = brandPresets['https://linear.app'];
        } else if (normalized.includes('vercel')) {
          matched = brandPresets['https://vercel.com'];
        } else if (brandPresets[url]) {
          matched = brandPresets[url];
        } else {
          const cleanHost = url.replace(/^https?:\/\//i, '').replace(/\/.*$/, '') || 'target-domain.com';
          matched = {
            name: `${cleanHost} Extracted DNA`,
            url: cleanHost,
            palettes: [
              { name: "Primary Brand Hue", hex: "#1A365D", role: "Primary / Text", luminance: "0.038", ratio: "14.2:1", badge: "AAA Pass" },
              { name: "Accent Energy", hex: "#2B6CB0", role: "Brand Primary", luminance: "0.150", ratio: "6.9:1", badge: "AA Pass" },
              { name: "Interactive Teal", hex: "#319795", role: "Secondary Accent", luminance: "0.280", ratio: "5.4:1", badge: "AA Pass" },
              { name: "Washi Canvas (Background)", hex: "#F4EFE6", role: "Base Canvas", luminance: "0.852", ratio: "18.2:1", badge: "AAA Pass" },
              { name: "Warm Slate (Surface)", hex: "#EDE8DE", role: "Elevated Surface", luminance: "0.803", ratio: "15.1:1", badge: "AAA Pass" },
              { name: "Hanko Alert", hex: "#8B1A1A", role: "Warning / Action", luminance: "0.078", ratio: "9.2:1", badge: "AAA Pass" }
            ],
            typography: [
              { label: "Display Specimen", size: "64px", weight: "300 / Light", sample: `Design Architecture for ${cleanHost}`, font: '"Cormorant Garamond", Georgia, serif' },
              { label: "Heading Specimen", size: "32px", weight: "600 / Semibold", sample: "Automated extraction complete with zero runtime drift.", font: '"Cormorant Garamond", Georgia, serif' },
              { label: "Body Copy", size: "16px", weight: "400 / Regular", sample: `All stylesheets and Google Fonts dynamically mapped from ${cleanHost} into unified W3C tokens.`, font: '"Libre Baskerville", Georgia, serif' },
              { label: "Data / Code Tokens", size: "12px", weight: "700 / Monospace", sample: `--brand-${cleanHost.replace(/[^a-z0-9]/gi, '-')}-root: #1a365d;`, font: '"Courier Prime", monospace' }
            ],
            voice: {
              archetype: "Direct, Precise, Modern, Purpose-Driven",
              keywords: ["Frictionless", "Automated", "Verified", "Scalable", "Systemic"],
              dos: [
                `Highlight core strengths of ${cleanHost}.`,
                "Adhere to strict WCAG 2.1 accessibility constraints."
              ],
              donts: [
                "Avoid generic placeholder terminology."
              ],
              sampleHeadline: `Uncompromising brand precision extracted directly from ${cleanHost}.`
            }
          };
        }

        setSelectedBrand(matched);
        setIsExtracting(false);
        setExtractionProgress(null);

        // If on another route, navigate home to show the extraction workbench
        if (currentRoute.path !== '/') {
          navigate('/');
        }

        // Smooth scroll to workbench
        setTimeout(() => {
          const workbenchEl = document.getElementById('workbench');
          if (workbenchEl) {
            workbenchEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
    }, 280);
  };

  // Render view depending on currentRoute
  const renderCurrentView = () => {
    if (currentRoute.isNotFound) {
      return (
        <NotFoundPage
          onNavigate={navigate}
          reason={currentRoute.notFoundReason}
          identifier={currentRoute.param}
        />
      );
    }

    switch (currentRoute.name) {
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'privacy':
        return <PrivacyPolicyPage onNavigate={navigate} />;
      case 'terms':
        return <TermsPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'library':
        return <ToolRoutesView route="library" onNavigate={navigate} onSelectBrand={setSelectedBrand} />;
      case 'compare':
        return <ToolRoutesView route="compare" onNavigate={navigate} />;
      case 'design':
        return <ToolRoutesView route="design" onNavigate={navigate} />;
      case 'kit':
        return <ToolRoutesView route="kit" param={currentRoute.param} onNavigate={navigate} />;
      case 'share':
        return <ToolRoutesView route="share" param={currentRoute.param} onNavigate={navigate} />;
      case 'build':
      case 'home':
      default:
        return (
          <>
            <Hero
              onExtract={handleExtract}
              isExtracting={isExtracting}
              extractionProgress={extractionProgress}
              extractionError={extractionError}
              onClearError={() => setExtractionError(null)}
            />
            <SocialProofStrip />
            <WorkbenchDemo brandData={selectedBrand} />
            <FeatureMatrix />
            <ExportShowcase />
            <Architecture />
            <Comparison />
            <CtaBanner appUrl={appUrl} onNavigate={navigate} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--foreground)] selection:text-[var(--background)]">
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        appUrl={appUrl}
        onNavigate={navigate}
        currentPath={currentRoute.path}
      />
      <main className="flex-grow">
        {renderCurrentView()}
      </main>
      <Footer onNavigate={navigate} />
      <CookieBanner onNavigate={navigate} />
    </div>
  );
}
