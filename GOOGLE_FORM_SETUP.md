# Simple Google Form Setup Guide

This guide will help you automatically save form submissions from your website to a Google Sheet. It's easier than it sounds!

## Step-by-Step Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **Blank** to create a new spreadsheet
3. Name it something like "Giftshop Form Responses"
4. In the first row, add these column headers:
   - Column A: `Name`
   - Column B: `Email`
   - Column C: `LinkedIn`
   - Column D: `Shopify Store URL`
   - Column E: `Timestamp`

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, click **Extensions** (top menu)
2. Click **Apps Script**
3. A new tab will open with a code editor
4. **Delete everything** in the editor (select all and delete)
5. **Copy and paste** this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Add headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Name', 'Email', 'LinkedIn', 'Shopify Store URL', 'Timestamp']);
    }
    
    // Add the form submission as a new row
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.linkedin || '',
      data.shopifyStore || '',
      data.timestamp || new Date()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

6. Click the **Save** icon (floppy disk) or press `Cmd+S` (Mac) / `Ctrl+S` (Windows)
7. Give it a name like "Form Handler" when prompted

### Step 3: Deploy as Web App

1. Click the **Deploy** button (top right)
2. Click **New deployment**
3. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
4. Fill in these settings:
   - **Description:** "Form submission handler" (or anything you want)
   - **Execute as:** Select **Me**
   - **Who has access:** Select **Anyone**
5. Click **Deploy**
6. **IMPORTANT:** You'll see a popup asking for authorization. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Project Name] (unsafe)**
9. Click **Allow**
10. **Copy the Web app URL** - it will look like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```
    **Save this URL somewhere safe!** You'll need it in the next step.

### Step 4: Add URL to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Find your **giftshop-site** project and click on it
3. Click **Settings** (top menu)
4. Click **Environment Variables** (left sidebar)
5. Click **Add New**
6. Fill in:
   - **Name:** `GOOGLE_FORM_SCRIPT_URL`
   - **Value:** Paste the URL you copied in Step 3
   - **Environment:** Check **Production** (and **Preview** if you want)
7. Click **Save**

### Step 5: Redeploy Your Site

1. In Vercel, go to your project's **Deployments** tab
2. Click the **three dots** (⋮) on your latest deployment
3. Click **Redeploy**
4. Wait for it to finish (usually 1-2 minutes)

### Step 6: Test It!

1. Go to your website (giftshop.co)
2. Fill out the form with test data
3. Submit it
4. Go back to your Google Sheet
5. You should see a new row with your test data!

## Troubleshooting

**Nothing appears in the sheet?**
- Check Vercel logs: Go to your project → Deployments → Click on the latest deployment → Logs
- Make sure you copied the entire URL from Google Apps Script
- Make sure you redeployed after adding the environment variable

**Getting errors?**
- Double-check that you set "Who has access" to **Anyone** in Step 3
- Make sure you authorized the script when prompted
- Try redeploying your site again

## Need Help?

If you get stuck, check:
- Vercel deployment logs for errors
- Make sure the Google Sheet has the correct column headers
- Verify the environment variable is set correctly in Vercel

That's it! Once set up, every form submission will automatically appear in your Google Sheet. 🎉
