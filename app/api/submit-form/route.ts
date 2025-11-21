import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { name, email, linkedin, shopifyStore } = body;

    // Validate required fields
    if (!name || !email || !shopifyStore) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Normalize Shopify Store URL - add https:// if missing
    if (shopifyStore && !shopifyStore.startsWith('http://') && !shopifyStore.startsWith('https://')) {
      shopifyStore = `https://${shopifyStore}`;
    }

    // Log the submission
    console.log("Form submission:", {
      name,
      email,
      linkedin: linkedin || "Not provided",
      shopifyStore,
      timestamp: new Date().toISOString(),
    });

    // Send to Zapier webhook (if configured)
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;
    if (zapierWebhookUrl) {
      try {
        const zapierPayload = {
          name,
          email,
          linkedin: linkedin || "",
          shopifyStore,
          timestamp: new Date().toISOString(),
          source: "giftshop.co",
        };

        const response = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(zapierPayload),
        });

        if (!response.ok) {
          console.error("Failed to send to Zapier:", await response.text());
        } else {
          console.log("Successfully sent to Zapier");
        }
      } catch (error) {
        console.error("Error sending to Zapier:", error);
        // Don't fail the request if Zapier fails
      }
    }

    // Submit to Google Form via Google Apps Script (if configured)
    const googleFormScriptUrl = process.env.GOOGLE_FORM_SCRIPT_URL;
    console.log("Google Form Script URL configured:", !!googleFormScriptUrl);
    if (googleFormScriptUrl) {
      try {
        console.log("Attempting to send to Google Form...");
        const response = await fetch(googleFormScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            linkedin: linkedin || "",
            shopifyStore,
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Failed to send to Google Form:", response.status, errorText);
        } else {
          const result = await response.text();
          console.log("Successfully sent to Google Form:", result);
        }
      } catch (error) {
        console.error("Error sending to Google Form:", error);
        // Don't fail the request if Google Form fails
      }
    } else {
      console.log("GOOGLE_FORM_SCRIPT_URL environment variable not found");
    }

    // Alternative: Direct Google Form submission (if entry IDs are configured)
    const googleFormUrl = process.env.GOOGLE_FORM_SUBMIT_URL;
    if (googleFormUrl) {
      try {
        // Get entry IDs from environment variables
        const entryIds = {
          name: process.env.GOOGLE_FORM_ENTRY_NAME,
          email: process.env.GOOGLE_FORM_ENTRY_EMAIL,
          linkedin: process.env.GOOGLE_FORM_ENTRY_LINKEDIN,
          shopifyStore: process.env.GOOGLE_FORM_ENTRY_SHOPIFY,
        };

        if (entryIds.name && entryIds.email && entryIds.shopifyStore) {
          // Create form data for Google Forms submission
          const formData = new URLSearchParams();
          formData.append(entryIds.name, name);
          formData.append(entryIds.email, email);
          if (linkedin && entryIds.linkedin) {
            formData.append(entryIds.linkedin, linkedin);
          }
          formData.append(entryIds.shopifyStore, shopifyStore);

          const response = await fetch(googleFormUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formData.toString(),
          });

          if (!response.ok) {
            console.error("Failed to submit to Google Form directly:", await response.text());
          } else {
            console.log("Successfully submitted to Google Form directly");
          }
        }
      } catch (error) {
        console.error("Error submitting to Google Form directly:", error);
        // Don't fail the request if Google Form fails
      }
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

