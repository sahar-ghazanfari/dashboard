"use client";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import Link from "next/link";
import { GiPieChart } from "react-icons/gi";
import { MdBarChart } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import { PiChartLine } from "react-icons/pi";
import { LuMessageSquareText } from "react-icons/lu";
import { IoSettingsOutline, IoLogInOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function Sidebar({ t }) {
  const { locale } = useLocale();
  const [activeItem, setActiveItem] = useState(1);
  const sidebarItems = [
    { id: 1, name: `${t("dashboard")}`, icon: <GiPieChart />, href: "/dashboard" },
    {
      id: 2,
      name: `${t("Leaderboard")}`,
      icon: <MdBarChart />,
      href: "/leaderboard",
    },
    { id: 3, name: `${t("Order")}`, icon: <FiShoppingCart />, href: "/order" },
    {
      id: 4,
      name: `${t("Products")}`,
      icon: <LuShoppingBag />,
      href: "/products",
    },
    {
      id: 5,
      name: `${t("Sales Report")}`,
      icon: <PiChartLine />,
      href: "/sales",
    },
    {
      id: 6,
      name: `${t("Messages")}`,
      icon: <LuMessageSquareText />,
      href: "/messages",
    },
    {
      id: 7,
      name: `${t("settings")}`,
      icon: <IoSettingsOutline />,
      href: "/settings",
    },
    {
      id: 8,
      name: `${t("Sign out")}`,
      icon: <IoLogInOutline />,
      href: "/logout",
    },
  ];

  return (
    <div
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="m-4 hidden lg:flex lg:flex-col lg:items-start lg:gap-6"
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary w-fit p-2 rounded-lg">
          <MdOutlineDashboardCustomize size={28} color="white" />
        </div>
        <span className="font-bold text-2xl">{t("Dabang")}</span>
      </div>
      <ul className="space-y-8">
        {sidebarItems.map((item) => (
          <Link
            className={`text-gray_3 px-6 flex gap-x-2 py-2 text-xl items-center rounded-md transition-all ${
              activeItem === item.id
                ? "bg-primary text-white shadow shadow-primary"
                : "hover:bg-primary hover:text-white hover:shadow hover:shadow-primary"
            }`}
            key={item.id}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
