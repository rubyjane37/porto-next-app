import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientHeader from "./components/ClientHeader";
import ClientFooter from "./components/ClientFooter";
import Providers from "./components/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://natsrululum37.vercel.app'),
  title: "Portfolio - Natsrul Ulum | Frontend Developer",
  description: "Portfolio Natsrul Ulum - Frontend developer passionate about creating beautiful and functional web experiences. Explore projects, skills, and contact info.",
  openGraph: {
    title: "Portfolio - Natsrul Ulum | Frontend Developer",
    description: "Portfolio Natsrul Ulum - Frontend developer passionate about creating beautiful and functional web experiences.",
    type: "website",
    images: ["/photo-profile/photo-profile.jpg"],
    url: "https://natsrululum37.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Natsrul Ulum | Frontend Developer",
    description: "Portfolio Natsrul Ulum - Frontend developer passionate about creating beautiful and functional web experiences.",
    images: ["/photo-profile/photo-profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#232931",
          color: "#EEEEEE",
          fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
          minHeight: "100vh",
          lineHeight: 1.6,
        }}
      >
        <Providers>
          <ClientHeader />
          <main style={{ minHeight: "100vh", paddingTop: "64px" }}>
            {children}
          </main>
          <ClientFooter />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
