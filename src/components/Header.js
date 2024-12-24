"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [notification, setNotification] = useState(false);

  return (
    <div className="flex items-center justify-between w-full">
      {/* <div></div> */}
      <RxHamburgerMenu className="block lg:hidden" />
      <div className="hidden lg:grid lg:grid-cols-10 lg:h-full lg:items-center">
        <div className="col-span-1">
          <select className="pr-3 border-white border">
            <option value="Profile">Profile</option>
            <option value="Settings">Settings</option>
            <option value="Logout">Logout</option>
          </select>
        </div>
        <button className="p-2 relative text-orange bg-orange_light w-fit flex justify-self-center items-center rounded-lg text-2xl">
          <MdNotifications />
          <div
            className={` ${
              notification
                ? "absolute top-0 right-0 animate-ping w-2 h-2 rounded-full bg-red"
                : ""
            } `}
          ></div>
          <div
            className={` ${
              notification
                ? "absolute top-0 right-0 w-2 h-2 rounded-full bg-red"
                : ""
            } `}
          ></div>
        </button>
        <select className="pr-3 border border-white">
          <option value="fa">fa</option>
          <option value="en">en</option>
        </select>
        <div className="relative col-start-5 col-span-4">
          <input
            type="search"
            className="w-full bg-[#F9FAFB] py-2 pr-4 pl-14 rounded-lg focus:outline-none"
            placeholder="جستجو"
          />
          <IoIosSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-primary w-5 h-5" />
        </div>
      </div>
      <div className="col-end-10 text-3xl font-bold text-[#151D48]">
        Dashboard
      </div>
    </div>
  );
}

export default Header;
