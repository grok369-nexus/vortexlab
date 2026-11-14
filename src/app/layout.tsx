import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vortex Labs | Extraordinary technology. Effortless experiences.",
    template: "%s | Vortex Labs",
  },
  description:
    "Vortex Labs designs and builds thoughtful websites, web applications, and digital products that make complex things feel simple.",
  openGraph: {
    title: "Vortex Labs",
    description: "Extraordinary technology. Effortless experiences. Meaningful lives.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070910",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
