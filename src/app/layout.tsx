import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google"
import { Leckerli_One } from "next/font/google"

import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({
  weight: ['100', '300', '500', '700'],
  subsets: ['cyrillic'],
  variable: "--font-montserrat"
})

const font = Leckerli_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font"
})

export const metadata: Metadata = {
  title: "Виртуальные открытки",
  description: "Сервис маркеров дополненной реальности",
  icons: {
    icon: ["/images/icons/fav/favicon.ico?v=4"],
    apple: ["/images/icons/fav/apple-touch-icon.png?v=4"],
    shortcut: ["/images/icons/fav/apple-touch-icon.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>


        <script src="/scripts/aframe.min.js" />
        <script src="/scripts/aframe-ar.js" />
        <script src="/scripts/aframe-particle-system-component.js" />
        <script src="/scripts/gesture-detector.js" />
        <script src="/scripts/gesture-handler.js" />

      </head>
      <body className={`${montserrat.variable} ${font.variable}`}>
        {children}
      </body>
    </html>
  );
}
