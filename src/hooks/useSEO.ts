import { useEffect, useMemo } from 'react';
import type { RouteState, SEOMetadata } from '../types.ts';
import {
  DEFAULT_SEO_CONFIG,
  ROUTE_SEO_MAP,
  formatParamLabel,
  resolveRouteSEO,
  routeMetadata,
  type RouteSEODefinition,
} from '../data/seo.ts';

export { routeMetadata, ROUTE_SEO_MAP, formatParamLabel, resolveRouteSEO, DEFAULT_SEO_CONFIG };
export type { RouteSEODefinition };

export interface UseSEOOptions {
  baseUrl?: string;
  defaultImage?: string;
  siteName?: string;
}

/**
 * Resolves SEO metadata based on the current RouteState using the ROUTE_SEO_MAP.
 */
export function getRouteSEOMetadata(
  route: RouteState,
  baseUrl = DEFAULT_SEO_CONFIG.baseUrl
): SEOMetadata {
  return resolveRouteSEO(route, baseUrl);
}

/**
 * Utility to create or update a <meta> element in the document head.
 */
function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string): void {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Utility to create or update a <link> element in the document head.
 */
function setLinkTag(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * Custom React hook dedicated to synchronizing SEO metadata, OpenGraph tags,
 * Twitter cards, robots directives, and canonical URLs for every client-side route,
 * consuming the route metadata map defined in 'src/data/seo.ts'.
 *
 * @param currentRoute The active RouteState object from the router
 * @param options Optional configuration overrides (baseUrl, defaultImage, siteName)
 * @returns The active SEOMetadata for the route
 */
export function useSEO(currentRoute: RouteState, options?: UseSEOOptions): SEOMetadata {
  const baseUrl = options?.baseUrl || DEFAULT_SEO_CONFIG.baseUrl;
  const siteName = options?.siteName || DEFAULT_SEO_CONFIG.siteName;

  const metadata = useMemo(() => {
    return resolveRouteSEO(currentRoute, baseUrl);
  }, [currentRoute, baseUrl]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const { title, description, canonical, robots, ogType, ogImage } = metadata;

    // Document Title
    document.title = title;

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', robots);

    // Canonical Link Tag
    setLinkTag('canonical', canonical);

    // OpenGraph Tags
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:site_name', siteName);
    setMetaTag('property', 'og:image', ogImage);

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:url', canonical);
    setMetaTag('name', 'twitter:image', ogImage);
  }, [metadata, siteName]);

  return metadata;
}
