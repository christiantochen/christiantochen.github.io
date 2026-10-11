import type { Metadata } from "next";
import { Figtree, Newsreader } from "next/font/google";

import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-figtree",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-newsreader",
  display: "swap",
});

const description =
  "Christianto Chen is a software engineer based in Indonesia. Get in touch to work together or just say hi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://christiantochen.com"),
  title: "Christianto Chen",
  description,
  openGraph: {
    title: "Christianto Chen",
    description,
    url: "/",
    siteName: "Christianto Chen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${figtree.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
