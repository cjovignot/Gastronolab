"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Gastronolab',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Import Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Navbar */}
        <NavBar />

        {/* Content */}
        {children}

        {/* Apply Inter font to the whole body */}
        <style jsx global>{`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </body>
      <footer>
          <Footer />
      </footer>
    </html>
  );
}




