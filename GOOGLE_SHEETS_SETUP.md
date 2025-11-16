# Google Sheets Integration Setup

You have several options to connect the form submissions to Google Sheets:

## Option 1: Google Apps Script (Easiest - Recommended)

1. Create a new Google Sheet
2. Add headers in row 1: `Name`, `Email`, `LinkedIn`, `Shopify Store URL`, `Timestamp`
3. Go to **Extensions** → **Apps Script**
4. Paste this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.email,
    data.linkedin || '',
    data.shopifyStore,
    new Date()
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Deploy as a web app:
   - Click **Deploy** → **New deployment**
   - Choose type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
   - Click **Deploy**
   - Copy the **Web app URL**

6. Update `/app/api/submit-form/route.ts`:
   - Replace the TODO section with a fetch to your Google Apps Script URL

## Option 2: Google Sheets API with Service Account

1. Create a service account in Google Cloud Console
2. Enable Google Sheets API
3. Share your Google Sheet with the service account email
4. Install `googleapis` package: `npm install googleapis`
5. Use the service account credentials to write to the sheet

## Option 3: Third-party Services

- **Zapier/Make.com**: Create a webhook that triggers a Zap/Make scenario
- **Formspree**: Use their service which has built-in Google Sheets integration
- **Airtable**: Similar to Google Sheets but with better API

## Quick Implementation (Option 1)

Update `app/api/submit-form/route.ts`:

```typescript
// Add this after validation
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

if (GOOGLE_SCRIPT_URL) {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      linkedin: linkedin || '',
      shopifyStore,
    }),
  });
}
```

Then add `GOOGLE_SCRIPT_URL` to your `.env.local` file.

