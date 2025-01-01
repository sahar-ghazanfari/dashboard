"use client";
import { useEffect, useState } from "react";
import estedadFont from "@/constant/localFont";
import "../style/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({ children, params }) {
  // const { locale } = params;

  const { locale = "en" } = params;
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const userLocale = localStorage.getItem("locale");
    const currentLocale = userLocale || locale;
    document.documentElement.lang = currentLocale;

    import(`@/locales/${currentLocale}.json`)
      .then((mod) => {
        setMessages(mod.default);
      })
      .catch((error) => {
        console.error("Failed to load locale file:", error);
        setMessages({});
      });
  }, [locale]);

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body className={`${estedadFont.variable} font-sans`}>
        <LanguageProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
