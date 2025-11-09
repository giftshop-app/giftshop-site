# Shopify Brand Assets

This folder contains official Shopify brand assets downloaded from [Shopify Brand Assets](https://www.shopify.com/uk/brand-assets).

## How to Download Assets

**📋 See `DOWNLOAD_INSTRUCTIONS.md` for detailed step-by-step instructions.**

Quick steps:
1. Visit https://www.shopify.com/uk/brand-assets
2. Click "Download all brand assets" at the top of the page
3. Extract the downloaded ZIP file
4. Follow the organization guide in `DOWNLOAD_INSTRUCTIONS.md` to copy files to the correct folders
5. Add all files to git: `git add public/shopify-assets/ && git commit -m "Add Shopify brand assets"`

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

- `shopify_glyph.svg` - The Shopping Bag brandmark (SVG version)
- `shopify_glyph.png` - The Shopping Bag brandmark (PNG version) - **REQUIRED: Download from Shopify brand assets**

## Important: Download PNG Version

The website currently uses `shopify_glyph.png` in the hero banner. To get the official PNG:

1. Visit https://www.shopify.com/uk/brand-assets
2. Click "Download all brand assets"
3. In the extracted ZIP, look for "The Shopping Bag" folder
4. Find the PNG version of the glyph (usually named something like `shopify-glyph.png` or `shopping-bag.png`)
5. Copy it to this folder as `shopify_glyph.png`

Alternatively, you can download just "The Shopping Bag" assets from the brand assets page.

