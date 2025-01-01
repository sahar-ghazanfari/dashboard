import Login from "./login/page";
import { LanguageProvider } from "@/context/LanguageContext";
import { NextIntlClientProvider } from "next-intl";

export const metadata = {
  title: "ثبت نام / ورود",
};

export default function Home({ Component, pageProps }) {
  return (
    <div>
      <LanguageProvider>
        <NextIntlClientProvider messages={pageProps.messages}>
          <Login />
          <Component {...pageProps} />
        </NextIntlClientProvider>
      </LanguageProvider>
    </div>
  );
}
