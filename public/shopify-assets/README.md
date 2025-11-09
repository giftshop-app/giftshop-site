# Shopify Brand Assets

This folder contains official Shopify brand assets downloaded from [Shopify Brand Assets](https://www.shopify.com/uk/brand-assets).

## How to Download Assets

1. Visit https://www.shopify.com/uk/brand-assets
2. Click "Download all brand assets" at the top of the page
3. Extract the downloaded ZIP file
4. Organize the files in this folder according to the structure below

## Recommended Folder Structure

```
shopify-assets/
├── logos/
│   ├── primary/
│   │   ├── shopify-logo-full-color.svg
│   │   ├── shopify-logo-full-color.png
│   │   └── shopify-logo-inverted.svg (white wordmark)
│   ├── monotone/
│   │   ├── shopify-logo-black.svg
│   │   └── shopify-logo-white.svg
│   └── wordmark/
│       ├── shopify-wordmark.svg
│       └── shopify-wordmark-inverted.svg
├── brandmark/
│   ├── shopify_glyph.svg (The Shopping Bag)
│   └── shopify_glyph.png
└── README.md (this file)
```

## Usage in Next.js

### In React Components

```tsx
// Using SVG
<img src="/shopify-assets/brandmark/shopify_glyph.svg" alt="Shopify" />

// Or inline SVG for better control
<svg>...</svg>

// Using PNG
<img src="/shopify-assets/logos/primary/shopify-logo-full-color.png" alt="Shopify" />
```

### In CSS/HTML

```css
background-image: url('/shopify-assets/brandmark/shopify_glyph.svg');
```

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

## Current Assets

- `shopify_glyph.svg` - The Shopping Bag brandmark (currently in use in hero banner)

