"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import LanguageSelector from "./LanguageSelector";
import { useLocale } from "@/context/LocaleContext";

export function Header({ t }) {
  const { locale, setLocale } = useLocale();
  const [notification, setNotification] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <RxHamburgerMenu className="block lg:hidden" />
      <div className="hidden lg:flex lg:gap-x-6">
        <div className="flex">
          <select className="pr-3 border-white border">
            <option value="Profile">{t("profile")}</option>
            <option value="Settings">{t("settings")}</option>
            <option value="Logout">{t("logout")}</option>
          </select>
          <div className="relative w-10 h-10 opacity-20">
            <Image src={"/images/user.jpg"} alt="user" fill />
          </div>
        </div>
        <button className="p-2 relative text-orange bg-orange_light w-fit flex justify-self-center items-center rounded-lg text-2xl">
          <MdNotifications />
          <div
            className={`${
              notification
                ? "absolute top-0 right-0 animate-ping w-2 h-2 rounded-full bg-red"
                : ""
            }`}
          ></div>
          <div
            className={`${
              notification
                ? "absolute top-0 right-0 w-2 h-2 rounded-full bg-red"
                : ""
            }`}
          ></div>
        </button>
        <LanguageSelector locale={locale} setLocale={setLocale} />
      </div>
      <div className="flex gap-x-8">
        <div className="relative hidden lg:block">
          <input
            type="search"
            className="w-full bg-[#F9FAFB] py-2 pr-4 pl-24 rounded-lg focus:outline-none"
            placeholder={t("search")}
          />
          <IoIosSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-primary w-5 h-5" />
        </div>
        <div className="text-3xl font-bold text-[#151D48]">
          {t("dashboard")}
        </div>
      </div>
    </div>
  );
}
