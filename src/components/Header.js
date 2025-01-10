"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import LanguageSelector from "./LanguageSelector";
import { useLocale } from "@/context/LocaleContext";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

function Header({ t }) {
  const { locale } = useLocale();
  const [notification, setNotification] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <RxHamburgerMenu
          className="block lg:hidden text-2xl cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />
        <div className="hidden lg:flex lg:gap-x-6">
          <div
            className={`items-center mx-2 ${
              locale === "fa" ? "flex-row-reverse" : "flex-row"
            } flex`}
          >
            <select
              className={`border-white border ${
                locale === "fa" ? "text-right" : "text-left"
              }`}
            >
              <option value="Profile">{t("profile")}</option>
              <option value="Settings">{t("settings")}</option>
              <option value="Logout">{t("logout")}</option>
            </select>
            <div className="relative w-10 h-10 opacity-20">
              <Image
                sizes="(max-width: 768px) 100vw, 50vw"
                src={"/images/user.jpg"}
                alt="user"
                fill
              />
            </div>
          </div>
          <button className="p-2 relative text-orange bg-orange_light w-fit flex justify-center items-center rounded-lg text-2xl">
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
          <LanguageSelector />
        </div>
        <div className="flex gap-x-8">
          <div className="relative hidden lg:block">
            <input
              type="search"
              className={`w-full bg-[#F9FAFB] py-2  rounded-lg focus:outline-none ${
                locale === "fa"
                  ? "text-right pr-6 pl-24"
                  : "text-left pl-6 pr-24"
              }`}
              placeholder={t("search")}
            />
            <IoIosSearch
              className={`absolute top-1/2 ${
                locale === "fa" ? "right-4" : "left-4"
              } transform -translate-y-1/2 text-primary w-5 h-5`}
            />
          </div>
          <div className="text-3xl font-bold text-[#151D48]">
            {t("dashboard")}
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="w-3/4 max-w-xs bg-white h-full p-6">
            <div
              dir={locale === "fa" ? "rtl" : "ltr"}
              className="flex w-full justify-between mb-4"
            >
              <button
                className="text-gray-600 text-lg mb-4"
                onClick={() => setSidebarOpen(false)}
              >
                <IoCloseSharp size={32} color="red" />
              </button>
              <LanguageSelector />
            </div>
            <ul className="flex gap-y-4 flex-col">
              <Link className="border-b pb-4" href={"/"}>
                {t("dashboard")}
              </Link>
              <Link className="border-b pb-4" href={"/"}>
                {t("profile")}
              </Link>
              <Link className="border-b pb-4" href={"/"}>
                {t("settings")}
              </Link>
              <Link className="border-b pb-4" href={"/"}>
                {t("logout")}
              </Link>
            </ul>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)}></div>
        </div>
      )}
    </>
  );
}
export default Header;