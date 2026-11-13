import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://vortexlabs.ug"),
  title: {
    default: "Vortex Labs — Extraordinary technology. Effortless experiences.",
    template: "%s | Vortex Labs",
  },
  description:
    "Vortex Labs designs and builds thoughtful digital products, websites, and custom software experiences.",
  openGraph: {
    title: "Vortex Labs",
    description: "Extraordinary technology. Effortless experiences. Meaningful lives.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
