import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Default social share image (1200×630), generated at build time.
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",
          padding: 80, background: "#0A0910", color: "#F4F1EA",
          backgroundImage: "radial-gradient(circle at 20% 20%, #c6ff3d33, transparent 45%), radial-gradient(circle at 90% 90%, #ff3d8b33, transparent 45%)",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
          <path d="M18 4H46L60 18V46C60 53.7 53.7 60 46 60H18C10.3 60 4 53.7 4 46V18C4 10.3 10.3 4 18 4Z" fill="#C6FF3D" />
          <rect x="15" y="16" width="30" height="9" rx="2.5" fill="#0A0910" />
          <rect x="25.5" y="16" width="9" height="32" rx="2.5" fill="#0A0910" />
          <rect x="42" y="38" width="8" height="8" rx="2" fill="#FF3D8B" />
        </svg>
        <div style={{ marginTop: 48, fontSize: 96, fontWeight: 900, letterSpacing: -2 }}>{site.name}</div>
        <div style={{ marginTop: 12, fontSize: 44, color: "#C6FF3D" }}>{site.tagline}</div>
        <div style={{ marginTop: 28, fontSize: 26, color: "#A7A3B5" }}>{`Independent mobile games · ${site.location}`}</div>
      </div>
    ),
    size
  );
}
