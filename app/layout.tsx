import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_CONFIG } from "../src/lib/constants";
import { ParallaxProvider } from "../src/components/animations/ParallaxProvider";
import "./globals.css";
import "../src/styles/animations.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: SITE_CONFIG.title,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "population genetics",
    "deep learning",
    "artificial intelligence",
    "genetic ancestry",
    "human evolution",
    "phylogenetics",
    "genomics",
    "machine learning",
    "bioinformatics"
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}