import type { BrandKitData } from '../types.ts';

export const brandPresets: Record<string, BrandKitData> = {
  'https://stripe.com': {
    name: "Stripe Precision System",
    url: "stripe.com",
    palettes: [
      { name: "Ink Sumi (Foreground)", hex: "#0A0A0A", role: "Primary / Text", luminance: "0.012", ratio: "18.2:1", badge: "AAA Pass" },
      { name: "Indigo Stripe (Brand Accent)", hex: "#635BFF", role: "Brand Primary", luminance: "0.142", ratio: "7.4:1", badge: "AA Pass" },
      { name: "Cyan Horizon (Interactive)", hex: "#00D4FF", role: "Secondary Accent", luminance: "0.584", ratio: "4.8:1", badge: "AA Pass" },
      { name: "Washi Canvas (Background)", hex: "#F4EFE6", role: "Base Canvas", luminance: "0.852", ratio: "18.2:1", badge: "AAA Pass" },
      { name: "Slate Paper (Surface)", hex: "#EDE8DE", role: "Elevated Surface", luminance: "0.803", ratio: "15.1:1", badge: "AAA Pass" },
      { name: "Hanko Crimson (Alert / CTA)", hex: "#8B1A1A", role: "Warning / Accent", luminance: "0.078", ratio: "9.2:1", badge: "AAA Pass" },
    ],
    typography: [
      { label: "Display Specimen", size: "64px", weight: "300 / Light", sample: "Economic Infrastructure for the Internet", font: '"Cormorant Garamond", Georgia, serif' },
      { label: "Heading Specimen", size: "32px", weight: "600 / Semibold", sample: "Millions of companies scale on modern rails.", font: '"Cormorant Garamond", Georgia, serif' },
      { label: "Body Copy", size: "16px", weight: "400 / Regular", sample: "Design systems are living contracts between engineering velocity and product craftsmanship.", font: '"Libre Baskerville", Georgia, serif' },
      { label: "Data / Code Tokens", size: "12px", weight: "700 / Monospace", sample: "--token-space-inset-4: 16px; font-feature-settings: 'cv02';", font: '"Courier Prime", monospace' },
    ],
    voice: {
      archetype: "Architectural, Precise, Confident, Understated",
      keywords: ["Deterministic", "Infrastructure", "Frictionless", "Foundational", "Latency"],
      dos: [
        "Use active verbs that celebrate builder momentum.",
        "Frame technical capability in terms of unyielding reliability.",
        "Prefer sparse, elegant phrasing over bloated marketing superlatives."
      ],
      donts: [
        "Never use hollow buzzwords (e.g. 'supercharge', 'synergy').",
        "Avoid conversational fluff; maintain institutional gravitas."
      ],
      sampleHeadline: "Global financial plumbing, simplified to a single keystroke."
    }
  },
  'https://linear.app': {
    name: "Linear Method System",
    url: "linear.app",
    palettes: [
      { name: "Deep Obsidian (Ink)", hex: "#08090C", role: "Primary / Text", luminance: "0.008", ratio: "19.4:1", badge: "AAA Pass" },
      { name: "Linear Violet", hex: "#5E6AD2", role: "Brand Primary", luminance: "0.178", ratio: "6.2:1", badge: "AA Pass" },
      { name: "Opal Ghost", hex: "#E6E8F0", role: "Base Canvas", luminance: "0.820", ratio: "16.8:1", badge: "AAA Pass" },
      { name: "Charcoal Slate", hex: "#1C1D24", role: "Elevated Surface", luminance: "0.024", ratio: "14.2:1", badge: "AAA Pass" },
      { name: "Signal Tangerine", hex: "#E56238", role: "Warning / Accent", luminance: "0.220", ratio: "5.1:1", badge: "AA Pass" },
      { name: "Emerald Resolution", hex: "#27B883", role: "Success", luminance: "0.380", ratio: "4.6:1", badge: "AA Pass" }
    ],
    typography: [
      { label: "Display Specimen", size: "64px", weight: "300 / Light", sample: "Linear is a better way to build software.", font: '"Cormorant Garamond", Georgia, serif' },
      { label: "Heading Specimen", size: "32px", weight: "600 / Semibold", sample: "Meet the standard for modern software projects.", font: '"Cormorant Garamond", Georgia, serif' },
      { label: "Body Copy", size: "16px", weight: "400 / Regular", sample: "Streamline issues, projects, and product roadmaps with keyboard-first ergonomics.", font: '"Libre Baskerville", Georgia, serif' },
      { label: "Data / Code Tokens", size: "12px", weight: "700 / Monospace", sample: "--linear-curve-subtle: cubic-bezier(0.16, 1, 0.3, 1);", font: '"Courier Prime", monospace' }
    ],
    voice: {
      archetype: "Mechanical, Focused, Opinionated, High-Frequency",
      keywords: ["Keyboard-First", "Velocity", "Roadmaps", "Craft", "Momentum"],
      dos: [
        "Focus on speed, craft, and developer focus.",
        "Emphasize the joy of using finely tuned instruments."
      ],
      donts: [
        "No complex enterprise bureaucracy phrasing.",
        "Avoid patronizing explanations."
      ],
      sampleHeadline: "Issue tracking rebuilt for high-tempo engineering organizations."
    }
  },
  'https://vercel.com': {
    name: "Vercel Triangle System",
    url: "vercel.com",
    palettes: [
      { name: "Absolute Black", hex: "#000000", role: "Primary / Text", luminance: "0.000", ratio: "21.0:1", badge: "AAA Pass" },
      { name: "Geist Blue", hex: "#0070F3", role: "Brand Primary", luminance: "0.165", ratio: "6.8:1", badge: "AA Pass" },
      { name: "Canvas Alabaster", hex: "#FAFAFA", role: "Base Canvas", luminance: "0.940", ratio: "20.1:1", badge: "AAA Pass" },
      { name: "Smoke Border", hex: "#EAEAEA", role: "Elevated Surface", luminance: "0.850", ratio: "17.4:1", badge: "AAA Pass" },
      { name: "Crimson Error", hex: "#EE0000", role: "Alert", luminance: "0.130", ratio: "7.9:1", badge: "AAA Pass" },
      { name: "Amber Notice", hex: "#F5A623", role: "Warning", luminance: "0.450", ratio: "4.7:1", badge: "AA Pass" }
    ],
    typography: [
      { label: "Display Specimen", size: "64px", weight: "300 / Light", sample: "The Frontend Cloud for the Modern Web.", font: '"Cormorant Garamond", Georgia, serif' },
      { label: "Heading Specimen", size: "32px", weight: "600 / Semibold", sample: "Develop. Preview. Ship. Fast.", font: '"Cormorant Garamond", Georgia, serif' },
      { label: "Body Copy", size: "16px", weight: "400 / Regular", sample: "Vercel's platform enables developers to build and deploy high-performance websites worldwide.", font: '"Libre Baskerville", Georgia, serif' },
      { label: "Data / Code Tokens", size: "12px", weight: "700 / Monospace", sample: "--geist-space-gap: 24px; --geist-success: #0070f3;", font: '"Courier Prime", monospace' }
    ],
    voice: {
      archetype: "Crisp, Technical, Visionary, Modern",
      keywords: ["Edge", "Serverless", "Deploy", "Next.js", "Instant"],
      dos: [
        "Lead with developer productivity and zero-config deployment.",
        "Highlight speed and edge delivery performance metrics."
      ],
      donts: [
        "Avoid antiquated server management terminology."
      ],
      sampleHeadline: "Your frontend platform, distributed across hundreds of edge locations."
    }
  }
};
