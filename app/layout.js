import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Merriweather } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Da Paolo</title>
        <meta
          name="description"
          content="The best restaurant in Puerto Banus and the only with terrace"
        ></meta>
        <meta name="theme-color" content="red"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&family=Poppins:wght@100;200;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        {/* <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" /> */}
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
