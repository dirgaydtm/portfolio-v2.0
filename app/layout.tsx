import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/style/globals.css";
import { Analytics } from "@vercel/analytics/next";
import SplashScreen from "@/features/layout/components/splash-screen";
import { profile } from "@/shared/data/profile";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Hi, I'm Dirga. I build impressive things for the web. Grab a coffee and take a look around my coding journey.";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: siteDescription,
  metadataBase: new URL("https://dirga.dev"),
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: siteDescription,
    url: "https://dirga.dev",
    siteName: `${profile.name} | ${profile.title}`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://dirga.dev",
  jobTitle: profile.title,
  image: `https://dirga.dev${profile.avatar}`,
  description: profile.bio,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malang",
    addressCountry: "ID",
  },
  sameAs: profile.socials.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD data, not user input
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Analytics />
        <Provider>
          <SplashScreen />
          {children}
        </Provider>
      </body>
    </html>
  );
}