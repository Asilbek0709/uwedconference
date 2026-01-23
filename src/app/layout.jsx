import "./globals.css";
import { Open_Sans } from 'next/font/google'
import I18nProvider from "./components/I18nProvider";

const openSans = Open_Sans({
  subsets: ['latin'],      // поддерживаемые символы
  weight: ['400', '600', '700'],  // Regular, Medium, Bold
  display: 'swap',
})

export const metadata = {
  title: "INNOVATIONS IN FOREIGN LANGUAGE TEACHING IN THE ERA OF GLOBALIZATION AND SUSTAINABLE DEVELOPMENT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
