"use client"
import React, { useEffect, useState } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

import { UserLanguageProvider } from '../app/context/UserLanguageContext'; // Adjust the import path
import { initReactI18next } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Gastronolab',
  description: '',
}

export default function RootLayout({ children }) {
  const [userLanguage, setUserLanguage] = useState('en-US')
  
  useEffect(() => {
    setUserLanguage(localStorage.getItem("userLanguage"));
  }, []);

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        "fr-FR": {
          translation: require('../app/locales/fr_FR.json'),
        },
        "en-US": {
          translation: require('../app/locales/en_US.json'),
        },
      },
      lng: userLanguage, // Set the language based on the stored language
      fallbackLng: '', // Fallback to English if a translation is missing
      interpolation: {
        escapeValue: false, // React already escapes values
      },
    });

  return (
    <UserLanguageProvider>
      <I18nextProvider i18n={i18n}>
        <html>
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
          <footer>
              <Footer />
          </footer>
          </body>
        </html>
      </I18nextProvider>
    </UserLanguageProvider>
  );
}




