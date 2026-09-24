export interface PaletteItem {
  name: string;
  hex: string;
  role: string;
  luminance: string;
  ratio: string;
  badge: string;
}

export interface TypographyItem {
  label: string;
  size: string;
  weight: string;
  sample: string;
  font: string;
}

export interface BrandVoice {
  archetype: string;
  keywords: string[];
  dos: string[];
  donts: string[];
  sampleHeadline: string;
}

export interface BrandKitData {
  name: string;
  url: string;
  palettes: PaletteItem[];
  typography: TypographyItem[];
  voice: BrandVoice;
}

export interface FeaturePillar {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ArchitectureStep {
  num: string;
  label: string;
  tech: string;
  desc: string;
}

export interface ExtractionError {
  code: string;
  title: string;
  message: string;
  details?: string;
  targetUrl: string;
}

export interface ExtractionProgress {
  step: number;
  totalSteps: number;
  stepName: string;
  description: string;
  percent: number;
}

export interface RouteState {
  path: string;
  name: string;
  param?: string;
  isNotFound?: boolean;
  notFoundReason?: 'route' | 'share_token' | 'kit_id';
}

export interface SEOMetadata {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: string;
  ogImage: string;
}


