"use client";
import Charts from "@/components/Charts";
import { Header } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useLocale } from "@/context/LocaleContext";
import { useTranslation } from "@/hooks/useTranslate";

export default function Dashboard() {
  const { locale } = useLocale();
  const { t } = useTranslation(locale);

  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen">
      <div className="col-span-12 lg:col-span-10 self-center mx-6 lg:mx-0">
        <Header t={t} />
      </div>
      <div className="hidden lg:block lg:row-span-10 lg:col-span-2 h-full">
        <Sidebar t={t} />
      </div>
      <div className="col-span-12 lg:col-span-10 lg:row-span-11">
        <Charts t={t} />
      </div>
    </div>
  );
}
