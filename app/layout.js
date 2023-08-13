"use client"
import { useClient } from 'next/client';
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
       
    <html lang="en">
      <Head>   <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
      </Head>
      <Navbar/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
