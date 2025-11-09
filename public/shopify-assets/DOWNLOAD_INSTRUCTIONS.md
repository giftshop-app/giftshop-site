# Download and Organize Shopify Brand Assets

## Step 1: Download Assets

1. Visit [Shopify Brand Assets](https://www.shopify.com/uk/brand-assets)
2. Click **"Download all brand assets"** button at the top of the page
3. The ZIP file will download to your computer

## Step 2: Extract the ZIP

Extract the downloaded ZIP file to a temporary location (e.g., your Downloads folder).

## Step 3: Organize Files

The Shopify brand assets ZIP typically contains the following structure. Copy files to the corresponding folders:

### Primary Logos (Full Color)
**Source:** `Primary Logo/` folder in the ZIP  
**Destination:** `logos/primary/`

Copy these files:
- `shopify-logo-full-color.svg` → `logos/primary/shopify-logo-full-color.svg`
- `shopify-logo-full-color.png` → `logos/primary/shopify-logo-full-color.png`
- `shopify-logo-inverted.svg` (white wordmark) → `logos/primary/shopify-logo-inverted.svg`
- `shopify-logo-inverted.png` → `logos/primary/shopify-logo-inverted.png`

### Monotone Logos
**Source:** `Monotone logos/` folder in the ZIP  
**Destination:** `logos/monotone/`

Copy these files:
- `shopify-logo-black.svg` → `logos/monotone/shopify-logo-black.svg`
- `shopify-logo-black.png` → `logos/monotone/shopify-logo-black.png`
- `shopify-logo-white.svg` → `logos/monotone/shopify-logo-white.svg`
- `shopify-logo-white.png` → `logos/monotone/shopify-logo-white.png`

### Wordmark Only
**Source:** `Wordmark/` folder in the ZIP (if available)  
**Destination:** `logos/wordmark/`

Copy these files:
- `shopify-wordmark.svg` → `logos/wordmark/shopify-wordmark.svg`
- `shopify-wordmark.png` → `logos/wordmark/shopify-wordmark.png`
- `shopify-wordmark-inverted.svg` → `logos/wordmark/shopify-wordmark-inverted.svg`
- `shopify-wordmark-inverted.png` → `logos/wordmark/shopify-wordmark-inverted.png`

### The Shopping Bag (Brandmark/Glyph)
**Source:** `The Shopping Bag/` folder in the ZIP  
**Destination:** `brandmark/`

Copy these files:
- `shopify-glyph.svg` or `shopping-bag.svg` → `brandmark/shopify_glyph.svg`
- `shopify-glyph.png` or `shopping-bag.png` → `brandmark/shopify_glyph.png`
- Any other variations → `brandmark/`

## Step 4: Verify File Structure

After copying, your `shopify-assets` folder should look like this:

```
shopify-assets/
├── logos/
│   ├── primary/
│   │   ├── shopify-logo-full-color.svg
│   │   ├── shopify-logo-full-color.png
│   │   ├── shopify-logo-inverted.svg
│   │   └── shopify-logo-inverted.png
│   ├── monotone/
│   │   ├── shopify-logo-black.svg
│   │   ├── shopify-logo-black.png
│   │   ├── shopify-logo-white.svg
│   │   └── shopify-logo-white.png
│   └── wordmark/
│       ├── shopify-wordmark.svg
│       ├── shopify-wordmark.png
│       ├── shopify-wordmark-inverted.svg
│       └── shopify-wordmark-inverted.png
├── brandmark/
│   ├── shopify_glyph.svg
│   └── shopify_glyph.png
├── README.md
└── DOWNLOAD_INSTRUCTIONS.md
```

## Step 5: Add to Git

Once all files are in place, add them to git:

```bash
cd /Users/matthewschmidt/giftshopshopify/giftshop-site
git add public/shopify-assets/
git commit -m "Add Shopify brand assets"
git push origin main
```

## Notes

- **File naming:** Shopify's ZIP may use different naming conventions. Adjust file names as needed to match the structure above.
- **Multiple sizes:** Some assets may come in multiple sizes (e.g., `@1x`, `@2x`, `@3x`). Keep all sizes or choose the ones you need.
- **Formats:** Both SVG and PNG versions are recommended. SVG for scalability, PNG for compatibility.

## Quick Reference: File Paths in Code

```tsx
// Primary logo (full color)
<img src="/shopify-assets/logos/primary/shopify-logo-full-color.svg" alt="Shopify" />

// Inverted logo (white wordmark)
<img src="/shopify-assets/logos/primary/shopify-logo-inverted.svg" alt="Shopify" />

// Monotone black
<img src="/shopify-assets/logos/monotone/shopify-logo-black.svg" alt="Shopify" />

// Monotone white
<img src="/shopify-assets/logos/monotone/shopify-logo-white.svg" alt="Shopify" />

// The Shopping Bag (glyph)
<img src="/shopify-assets/brandmark/shopify_glyph.svg" alt="Shopify" />
<img src="/shopify-assets/brandmark/shopify_glyph.png" alt="Shopify" />
```

