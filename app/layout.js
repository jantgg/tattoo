import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tattoo</title>
        <meta
          name="description"
          content="The best tattoo studio in Marbella"
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

        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Gabarito&family=Merriweather:wght@300;400;700;900&family=New+Rocker&family=Poppins:wght@100;200;300;400;500;600;700;900&family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" as="style" href="https://unpkg.com/flickity@2/dist/flickity.min.css"></link>
        <script
  src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"
  async 
></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
