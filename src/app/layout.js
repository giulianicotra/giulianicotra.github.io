import "./globals.css";
import "@/app/i18n/config";
import Header from "../../components/Header";
import FirefoxClassWrapper from "../../components/FirefoxClassWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <FirefoxClassWrapper>
          <Header />
          {children}
        </FirefoxClassWrapper>
      </body>
    </html>
  );
}
