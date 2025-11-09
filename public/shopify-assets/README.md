# Shopify Brand Assets

This folder contains official Shopify brand assets for use on the Giftshop homepage.

## Folder Structure

```
shopify-assets/
├── logos/
│   ├── primary/          # Full-color logos (light & dark backgrounds)
│   │   ├── shopify-logo-full-color.svg
│   │   ├── shopify-logo-full-color.png
│   │   ├── shopify-logo-inverted.svg
│   │   └── shopify-logo-inverted.png
│   ├── monotone/         # Black & white logos
│   │   ├── shopify-logo-black.svg
│   │   ├── shopify-logo-black.png
│   │   ├── shopify-logo-white.svg
│   │   └── shopify-logo-white.png
│   └── wordmark/         # Wordmark-only logos (empty - reserved for future use)
├── brandmark/            # The Shopping Bag (glyph)
│   ├── shopify_glyph.svg
│   ├── shopify_glyph.png
│   ├── shopify_glyph_black.svg
│   ├── shopify_glyph_black.png
│   ├── shopify_glyph_white.svg
│   └── shopify_glyph_white.png
└── README.md
```

## Usage in Next.js

### In React Components

```tsx
// Primary logo (full color)
<img src="/shopify-assets/logos/primary/shopify-logo-full-color.svg" alt="Shopify" />

// Inverted logo (for dark backgrounds)
<img src="/shopify-assets/logos/primary/shopify-logo-inverted.svg" alt="Shopify" />

// Monotone black logo
<img src="/shopify-assets/logos/monotone/shopify-logo-black.svg" alt="Shopify" />

// Monotone white logo
<img src="/shopify-assets/logos/monotone/shopify-logo-white.svg" alt="Shopify" />

// The Shopping Bag (glyph) - currently used in hero banner
<img src="/shopify-assets/brandmark/shopify_glyph.png" alt="Shopify" />
```

### Using Next.js Image Component

```tsx
import Image from "next/image";

<Image 
  src="/shopify-assets/brandmark/shopify_glyph.png" 
  alt="Shopify" 
  width={20}
  height={20}
  priority
/>
```

## Current Usage

- **Hero Banner:** `/shopify-assets/brandmark/shopify_glyph.png` is used in the "Now available for all Shopify stores" banner on the homepage.

## Shopify Brand Guidelines

**Important:** When using Shopify brand assets, you must follow [Shopify's Trademark Usage Guidelines](https://www.shopify.com/uk/brand-assets):

1. ✅ Use must be expressly authorized in writing
2. ✅ Must not mislead consumers about sponsorship/affiliation
3. ✅ Must link to www.shopify.com when used on web pages
4. ✅ Must be used respectfully
5. ❌ Don't modify or create your own versions
6. ❌ Don't use on busy or low-contrast backgrounds
7. ❌ Don't stretch, rotate, or stack the logo

## Minimum Size Requirements

- **Digital:** 80px width minimum
- **Print:** 28mm width minimum

## Asset Details

### Primary Logos
- **Full Color (white background):** Standard logo for light backgrounds
- **Inverted (dark background):** White wordmark version for dark backgrounds

### Monotone Logos
- **Black:** Single-color black logo for light backgrounds
- **White:** Single-color white logo for dark backgrounds

### Brandmark (The Shopping Bag)
- **Full Color:** Standard green shopping bag icon
- **Black:** Black version for light backgrounds
- **White:** White version for dark backgrounds

All assets are available in both SVG (scalable) and PNG (raster) formats.
