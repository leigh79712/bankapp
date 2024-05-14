import "../globals.css";
import Navbar from "../../components/Homepage/Navbar";
import { ThemeProvider } from "next-themes";

import { dir } from "i18next";

const languages = ["en", "zh"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ThemeProvider attribute="class">
          <Navbar lng={lng} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
