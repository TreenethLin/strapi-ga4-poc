import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

// Import Inter font from Google
const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Looklook Strapi POC",
  description: "Generated by create next app",
};

const GG_Analytics_ID = process.env.NEXT_PUBLIC_GA4_ID || ''

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId={GG_Analytics_ID} />
    </html>
  );
}
