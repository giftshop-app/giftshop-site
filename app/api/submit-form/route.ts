import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, linkedin, shopifyStore } = body;

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

    // Log the submission
    console.log("Form submission:", {
      name,
      email,
      linkedin: linkedin || "Not provided",
      shopifyStore,
      timestamp: new Date().toISOString(),
    });

    // Send to Google Sheets via Google Apps Script (if configured)
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (googleScriptUrl) {
      try {
        const response = await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            linkedin: linkedin || "",
            shopifyStore,
          }),
        });

        if (!response.ok) {
          console.error("Failed to send to Google Sheets:", await response.text());
        }
      } catch (error) {
        console.error("Error sending to Google Sheets:", error);
        // Don't fail the request if Google Sheets fails
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

