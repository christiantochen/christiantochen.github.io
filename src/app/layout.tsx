import type { Metadata } from "next";
import { Figtree, IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";

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

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const description =
  "Kristianto Chen, also known online as Christianto Chen, is a software engineer based in Indonesia. Get in touch to work together or just say hi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://christiantochen.com"),
  title: "Kristianto Chen",
  description,
  openGraph: {
    title: "Kristianto Chen",
    description,
    url: "/",
    siteName: "Kristianto Chen",
    type: "website",
  },
};

// Runs before first paint so the saved theme (or the system one) is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${newsreader.variable} ${plexMono.variable} ${plexSans.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
