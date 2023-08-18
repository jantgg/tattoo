"use client";
import { useClient } from "next/client";
import Head from "next/head";
import "./globals.css";
import { useState } from "react";

import { Merriweather } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import useScrollPosition from "app/hooks/usescrollposition.js";

import Script from "next/script";
const inter = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: '300',
})

export default function RootLayout({ children }) {
  const scrollPosition = useScrollPosition();

  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
      <Navbar scrollPosition={scrollPosition} />
        {children}
      </body>
    </html>
  );
}
