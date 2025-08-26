import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";
import Script from "next/script";
import ScrollProgress from "./components/ScrollProgress";
import GrainOverlay from "./components/GrainOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harunali86.github.io/harun-portfolio"),
  title: {
    default: "Harun Shaikh | Full Stack Developer",
    template: "%s | Harun Shaikh",
  },
  description:
    "Full Stack Developer, Data Analyst, and Software Engineer building fast, accessible web products.",
  openGraph: {
    title: "Harun Shaikh | Full Stack Developer",
    description:
      "Full Stack Developer, Data Analyst, and Software Engineer building fast, accessible web products.",
    url: "/",
    siteName: "Harun Portfolio",
    images: [
      { url: "/og.svg", width: 1200, height: 630, alt: "Harun Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <GrainOverlay />
          <NavBar />
          {children}
        </ThemeProvider>
        <Script id="jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Harun Shaikh",
            url: "https://harunali86.github.io/harun-portfolio/next-site",
            sameAs: [
              "https://github.com/harunali86",
              "https://www.linkedin.com/in/harun-shaikh-0947751ba"
            ],
            jobTitle: "Full Stack Developer",
          })}
        </Script>
      </body>
    </html>
  );
}
