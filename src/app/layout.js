"use client";
import { LocaleProvider, useLocale } from "@/context/LocaleContext";
import estedadFont from "@/constant/localFont";
import "../style/globals.css";

export default function RootLayout({ children }) {
  return (
    <LocaleProvider>
      <LocaleBasedLayout>{children}</LocaleBasedLayout>
    </LocaleProvider>
  );
}

function LocaleBasedLayout({ children }) {
  const { locale } = useLocale();
  return (
    <html lang={locale} dir={locale === "fa" ? "ltr" : "rtl"}>
      <body className={`${estedadFont.variable} font-sans lg:overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
