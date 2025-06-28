import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rubyjane - Frontend Developer Portfolio",
  description: "Frontend developer passionate about creating beautiful and functional web experiences. Specialized in React, Next.js, and modern web technologies.",
  keywords: ["frontend developer", "react developer", "next.js developer", "web developer", "portfolio", "javascript", "typescript"],
  authors: [{ name: "Rubyjane" }],
  creator: "Rubyjane",
  publisher: "Rubyjane",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Rubyjane - Frontend Developer Portfolio",
    description: "Frontend developer passionate about creating beautiful and functional web experiences. Specialized in React, Next.js, and modern web technologies.",
    url: 'https://your-domain.com',
    siteName: 'Rubyjane Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rubyjane - Frontend Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rubyjane - Frontend Developer Portfolio",
    description: "Frontend developer passionate about creating beautiful and functional web experiences.",
    images: ['/og-image.jpg'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#232931" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rubyjane",
              "jobTitle": "Frontend Developer",
              "description": "Frontend developer passionate about creating beautiful and functional web experiences",
              "url": "https://your-domain.com",
              "sameAs": [
                "https://github.com/natsrululum37",
                "https://linkedin.com/in/yourprofile",
                "https://twitter.com/yourhandle"
              ],
              "knowsAbout": ["React", "Next.js", "JavaScript", "TypeScript", "Web Development"],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#232931] text-[#EEEEEE]`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
