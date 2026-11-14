import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vortex Labs | Technology that makes more possible.",
    template: "%s | Vortex Labs",
  },
  description:
    "Vortex Labs is an independent product engineering studio creating thoughtful digital products and dependable technology that make more possible.",
  openGraph: {
    title: "Vortex Labs",
    description: "Technology that makes more possible. Extraordinary technology. Effortless experiences. Meaningful lives.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030406",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
