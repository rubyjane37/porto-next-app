"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Create a custom dark theme
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ADB5",
    },
    secondary: {
      main: "#EEEEEE",
    },
    background: {
      default: "#232931",
      paper: "#393E46",
    },
    text: {
      primary: "#EEEEEE",
      secondary: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio - Ruby Jane | Frontend Developer</title>
        <meta name="description" content="Portfolio Ruby Jane - Frontend developer passionate about creating beautiful and functional web experiences. Explore projects, skills, and contact info." />
        <meta property="og:title" content="Portfolio - Ruby Jane | Frontend Developer" />
        <meta property="og:description" content="Portfolio Ruby Jane - Frontend developer passionate about creating beautiful and functional web experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/photo-profile/photo-profile.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Ruby Jane | Frontend Developer" />
        <meta name="twitter:description" content="Portfolio Ruby Jane - Frontend developer passionate about creating beautiful and functional web experiences." />
        <meta name="twitter:image" content="/photo-profile/photo-profile.jpg" />
      </Head>
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main style={{ minHeight: "100vh", paddingTop: "64px" }}>
            {children}
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
