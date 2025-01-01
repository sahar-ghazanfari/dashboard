"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuItem, Select, FormControl } from "@mui/material";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function Header() {
  const [notification, setNotification] = useState(false);
  const { locale, changeLanguage } = useLanguage();
  const router = useRouter();
  const t = useTranslations("dashboard");

  const handleChange = (event) => {
    const newLocale = event.target.value;
    changeLanguage(newLocale);  
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

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
        <FormControl className="relative">
          <Select
            value={locale}
            onChange={handleChange}
            displayEmpty
            className="px-3 rounded-lg focus:outline-none"
            renderValue={(selected) => (
              <div className="flex flex-row-reverse items-center gap-2">
                <img
                  src={
                    selected === "en"
                      ? "https://flagcdn.com/w40/us.png"
                      : "https://flagcdn.com/w40/ir.png"
                  }
                  alt={selected}
                  className="w-5 h-5 rounded-full"
                />
                <span className="capitalize">{selected.toUpperCase()}</span>
              </div>
            )}
          >
            <MenuItem value="en" className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="en"
                className="w-5 h-5 rounded-full"
              />
              English
            </MenuItem>
            <MenuItem value="fa" className="flex items-center gap-2">
              <img
                src="https://flagcdn.com/w40/ir.png"
                alt="fa"
                className="w-5 h-5 rounded-full"
              />
              فارسی
            </MenuItem>
          </Select>
        </FormControl>
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