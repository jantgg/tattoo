"use client";
import { useClient } from "next/client";
import Head from "next/head";
import "./globals.css";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
export const metadata = {
  title: "Da Paolo",
  description: "The best restaurant in Puerto Banus",
};

export default function RootLayout({ children }) {
  const scrollPosition = useScrollPosition();

  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Da Paolo</title>
        <meta name="description" content="The best restaurant in Puerto Banus and the only with terrace"></meta>
        <meta name="theme-color" content="red"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
         <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    />
      </head>
      <body className={inter.className}>
      <Navbar scrollPosition={scrollPosition} />
        {children}
      </body>
    </html>
  );
}
