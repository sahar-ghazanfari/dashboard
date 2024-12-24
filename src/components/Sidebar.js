"use client";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiPieChart } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";
import { PiChartLine } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";

function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const sidebarItems = [
    { id: 1, name: "Dashboard", icon: <GiPieChart /> },
    { id: 2, name: "Leaderboard", icon: <MdBarChart /> },
    { id: 3, name: "Order", icon: <FiShoppingCart /> },
    { id: 4, name: "Products", icon: <LuShoppingBag /> },
    { id: 5, name: "sales Report", icon: <PiChartLine /> },
    { id: 6, name: "Messages", icon: <LuMessageSquareText /> },
    { id: 7, name: "Settings", icon: <IoSettingsOutline /> },
    { id: 8, name: "Sign out", icon: <IoLogInOutline /> },
  ];

  return (
    <div
      dir="ltr"
      className="m-4 hidden lg:flex lg:flex-col lg:items-start lg:gap-6"
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary w-fit p-2 rounded-lg">
          <MdOutlineDashboardCustomize size={28} color="white" />
        </div>
        <span className="font-bold text-2xl">Dabang</span>
      </div>
      <ul className="space-y-8">
        {sidebarItems.map((item) => (
          <Link
            className={`text-gray_3 px-6 flex gap-x-2 py-2 text-xl hover:bg-primary hover:text-white hover:rounded-md items-center hover:shadow hover:shadow-primary${
              isActive
                ? " bg-primary text-white py-2 rounded-md items-center shadow shadow-primary"
                : ""
            }`}
            key={item.id}
            href={"/"}
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
