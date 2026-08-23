import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Insight Korea",
  description: "경험에서 나온 인사이트, 기술로 만드는 미래 — 산업 인사이트·글로벌 비즈니스·AI 기술·여행 플랫폼",

  verification: {
    google: "Co1x-SZH_ysJV5O2TWFvyA-rZ4xdZG0PWWalQdgwF50",
  },

  openGraph: {
    title: "AI Insight Korea",
    description: "경험에서 나온 인사이트, 기술로 만드는 미래 — 산업 인사이트·글로벌 비즈니스·AI 기술·여행 플랫폼",
    url: "https://amplusai.com",
    siteName: "AI Insight Korea",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7527937682633994"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}