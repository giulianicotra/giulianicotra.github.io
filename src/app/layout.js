import "./globals.css"; // Tailwind + styles globali
import "@/app/i18n/config";
import Header from "../../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />   {/* Navbar + LanguageSwitcher */}
        {children}   {/* Contenuto di page.js */}
      </body>
    </html>
  );
}
