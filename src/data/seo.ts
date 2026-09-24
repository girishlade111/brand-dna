import type { RouteState, SEOMetadata } from '../types.ts';

export interface RouteMetaItem {
  title: string;
  description: string;
}

export type KitParams = string | { kitId?: string; [key: string]: unknown };
export type ShareParams = string | { shareToken?: string; token?: string; [key: string]: unknown };

export interface DynamicRouteMetaFn<T = unknown> {
  (params?: T): RouteMetaItem;
  title: string;
  description: string;
}

export const DEFAULT_SEO_CONFIG = {
  baseUrl: 'https://branddna.design',
  siteName: 'Brand DNA // The Invisible Instrument',
  defaultImage: '/og-image.png',
  defaultRobots: 'index, follow',
};

/**
 * Format dynamic route parameters into readable title/description segments.
 * Example: "stripe-production" -> "Stripe Production", "tk_9a2f" -> "Tk 9a2f"
 */
export function formatParamLabel(param?: string): string {
  if (!param) return 'Specimen';
  return param
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Dynamic generator for /kit/:kitId routes
 */
export function getKitMetadata(params?: KitParams): RouteMetaItem {
  const rawParam = typeof params === 'string' ? params : params?.kitId;
  const label = formatParamLabel(rawParam);
  return {
    title: `Kit Inspector [${label}] — Brand DNA // Design Token Workbench`,
    description: `Detailed inspection view for synthesized brand kit tokens, W3C DTCG variables, and chromatic contrast ratios for [${label}].`,
  };
}

/**
 * Dynamic generator for /share/:shareToken routes
 */
export function getShareMetadata(params?: ShareParams): RouteMetaItem {
  const rawParam = typeof params === 'string' ? params : params?.shareToken || params?.token;
  const label = formatParamLabel(rawParam);
  return {
    title: `Shared Brand Specimen [${label}] — Brand DNA`,
    description: `Public read-only inspection of extracted brand tokens, color palettes, and typographic scales for specimen [${label}].`,
  };
}

// Function wrappers that also satisfy RouteMetaItem property access
const kitMetadataEntry = ((params?: KitParams) => getKitMetadata(params)) as DynamicRouteMetaFn<KitParams>;
kitMetadataEntry.title = 'Kit Inspector — Brand DNA // Design Token Workbench';
kitMetadataEntry.description =
  'Detailed inspection view for synthesized brand kit tokens, W3C DTCG variables, and chromatic contrast ratios.';

const shareMetadataEntry = ((params?: ShareParams) => getShareMetadata(params)) as DynamicRouteMetaFn<ShareParams>;
shareMetadataEntry.title = 'Shared Brand Specimen — Brand DNA';
shareMetadataEntry.description =
  'Public read-only inspection of extracted brand tokens, color palettes, and typographic scales.';

/**
 * Exported routeMetadata object mapping route keys to their respective { title, description }.
 * For 'kit' and 'share' routes, functions are implemented that accept params and return dynamic metadata.
 */
export const routeMetadata = {
  home: {
    title: 'Brand DNA // The Invisible Instrument — WCAG-Verified Design Tokens Extractor',
    description:
      'Extract colors, typography hierarchy, logos, and WCAG-verified W3C design tokens from any live URL into production-ready code in seconds. Precision token workbench.',
  },
  about: {
    title: 'About Brand DNA // The Invisible Instrument — Architectural Philosophy',
    description:
      'The foundational thesis behind deterministic brand system extraction. Reverse-engineering live production architecture vs hallucinated generative models.',
  },
  privacy: {
    title: 'Privacy Policy // Minimal Ingestion Architecture — Brand DNA',
    description:
      'Transparent specification of data collection, subprocessor transmission (Firecrawl, Lovable AI Gateway/Gemini 3 Flash, Supabase), and zero sale of personal data.',
  },
  terms: {
    title: 'Terms & Conditions // Fair Use & API Policy — Brand DNA',
    description:
      'Acceptable use policies, fair-use scraping constraints, best-effort mathematical approximations, rate limits, and intellectual property disclaimers.',
  },
  contact: {
    title: 'Contact & Support Desk // Communications Protocol — Brand DNA',
    description:
      'Submit technical extraction tickets, W3C token feedback, enterprise high-volume scraping requests, or GDPR data deletion dispatches.',
  },
  kit: kitMetadataEntry,
  share: shareMetadataEntry,
  404: {
    title: '404 Not Found // Signal Lost — Brand DNA',
    description:
      'The requested route or token identifier could not be resolved in the Brand DNA execution space.',
  },

  // Additional application route keys
  build: {
    title: 'Extraction Builder // The Invisible Instrument — Brand DNA',
    description:
      'Live multi-modal ingestion engine converting public URLs, design guidelines, and assets into W3C DTCG tokens and CSS.',
  },
  library: {
    title: 'Specimen Library // Verified Design Systems — Brand DNA',
    description:
      'Explore and inspect verified design tokens, computed color palettes, and typographic hierarchies extracted from premier digital products.',
  },
  compare: {
    title: 'Brand Systems Compare // Visual Diff Matrix — Brand DNA',
    description:
      'Side-by-side chromatic divergence, typographic scale comparison, and tone keyword diffing across distinct production architectures.',
  },
  design: {
    title: 'W3C DTCG Token Specification — Brand DNA',
    description:
      'Specification dictionary, zero-radius constraint rules, and design system compilation standards for Brand DNA.',
  },
};

export type RouteKey = keyof typeof routeMetadata;

export interface RouteSEODefinition {
  title: string | ((param?: string) => string);
  description: string | ((param?: string) => string);
  robots?: string | ((param?: string) => string);
  ogType?: string;
  ogImage?: string;
}

/**
 * Path-based mapping referencing routeMetadata
 */
export const ROUTE_SEO_MAP: Record<string, RouteSEODefinition> = {
  '/': {
    ...routeMetadata.home,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/about': {
    ...routeMetadata.about,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/privacy-policy': {
    ...routeMetadata.privacy,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/terms-and-conditions': {
    ...routeMetadata.terms,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/terms': {
    ...routeMetadata.terms,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/contact': {
    ...routeMetadata.contact,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/support': {
    ...routeMetadata.contact,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/build': {
    ...routeMetadata.build,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/library': {
    ...routeMetadata.library,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/compare': {
    ...routeMetadata.compare,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/design': {
    ...routeMetadata.design,
    robots: 'index, follow',
    ogType: 'website',
  },
  '/kit/:kitId': {
    title: (param) => routeMetadata.kit({ kitId: param }).title,
    description: (param) => routeMetadata.kit({ kitId: param }).description,
    robots: 'noindex, nofollow',
    ogType: 'article',
  },
  '/share/:shareToken': {
    title: (param) => routeMetadata.share({ shareToken: param }).title,
    description: (param) => routeMetadata.share({ shareToken: param }).description,
    robots: 'noindex, nofollow',
    ogType: 'article',
  },
  '/404': {
    ...routeMetadata[404],
    robots: 'noindex, nofollow',
    ogType: 'website',
  },
};

/**
 * Resolves SEO metadata by evaluating routeMetadata and the route state.
 */
export function resolveRouteSEO(
  route: RouteState,
  baseUrl: string = DEFAULT_SEO_CONFIG.baseUrl
): SEOMetadata {
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const cleanPath = route.path === '/' ? '' : route.path;
  const canonical = `${normalizedBase}${cleanPath}`;
  const ogImage = `${normalizedBase}${DEFAULT_SEO_CONFIG.defaultImage}`;

  // Dynamic 404 / NotFound states
  if (route.isNotFound || route.name === '404') {
    let title = routeMetadata[404].title;
    let description = routeMetadata[404].description;

    if (route.notFoundReason === 'kit_id') {
      title = `Kit Specimen Not Found [${formatParamLabel(route.param)}] — Brand DNA`;
      description = `The requested brand kit identifier [${route.param || 'specimen'}] could not be found or has expired.`;
    } else if (route.notFoundReason === 'share_token') {
      title = `Shared Token Expired or Invalid [${formatParamLabel(route.param)}] — Brand DNA`;
      description = `The shared brand kit token [${route.param || 'token'}] does not exist, has expired, or was revoked.`;
    }

    return {
      title,
      description,
      canonical,
      robots: 'noindex, nofollow',
      ogType: 'website',
      ogImage,
    };
  }

  // Handle dynamic kit route
  if (route.name === 'kit' || route.path.startsWith('/kit/')) {
    const meta = routeMetadata.kit({ kitId: route.param });
    return {
      title: meta.title,
      description: meta.description,
      canonical,
      robots: 'noindex, nofollow',
      ogType: 'article',
      ogImage,
    };
  }

  // Handle dynamic share route
  if (route.name === 'share' || route.path.startsWith('/share/')) {
    const meta = routeMetadata.share({ shareToken: route.param });
    return {
      title: meta.title,
      description: meta.description,
      canonical,
      robots: 'noindex, nofollow',
      ogType: 'article',
      ogImage,
    };
  }

  // Check routeMetadata by route name (home, about, privacy, terms, contact, etc.)
  const routeKey = route.name as RouteKey;
  if (routeKey in routeMetadata && typeof routeMetadata[routeKey] !== 'function') {
    const item = routeMetadata[routeKey] as RouteMetaItem;
    return {
      title: item.title,
      description: item.description,
      canonical,
      robots: DEFAULT_SEO_CONFIG.defaultRobots,
      ogType: 'website',
      ogImage,
    };
  }

  // Fallback to routeMetadata.home
  return {
    title: routeMetadata.home.title,
    description: routeMetadata.home.description,
    canonical,
    robots: DEFAULT_SEO_CONFIG.defaultRobots,
    ogType: 'website',
    ogImage,
  };
}
