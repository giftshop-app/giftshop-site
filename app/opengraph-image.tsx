import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "GiftShop. Coming soon.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #FFF5F7 100%)",
          padding: "60px 72px",
        }}
      >
        {/* Logo header */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: "#DA1B2B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#1a1a1a",
              letterSpacing: "-0.01em",
            }}
          >
            GiftShop
          </div>
        </div>

        {/* Main block */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Coming soon badge */}
          <div
            style={{
              alignSelf: "flex-start",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#4b5563",
              marginBottom: 36,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 9999,
                backgroundColor: "#DA1B2B",
              }}
            />
            COMING SOON
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.02,
            }}
          >
            <div style={{ color: "#1a1a1a" }}>Win new customers.</div>
            <div style={{ color: "#DA1B2B", fontStyle: "italic" }}>
              Reward the ones you have.
            </div>
          </div>

          {/* Sub */}
          <div
            style={{
              fontSize: 26,
              color: "#4b5563",
              marginTop: 28,
            }}
          >
            Built for Shopify merchants. Launching soon.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
