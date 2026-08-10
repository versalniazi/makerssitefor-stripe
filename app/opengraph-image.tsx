import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "90px",
          backgroundColor: "#1b1812",
          color: "#faf7f2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, color: "#d98a5b" }}>MAKERSLUXE LIMITED</div>
        <div style={{ display: "flex", fontSize: 72, marginTop: 24, maxWidth: 950, lineHeight: 1.15 }}>
          Professional Graphic Design, Made Simple.
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 36, color: "#ddd3c0", fontFamily: "sans-serif" }}>
          Design services and packages from $10 to $100
        </div>
      </div>
    ),
    { ...size }
  );
}
