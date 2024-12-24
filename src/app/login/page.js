"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminNum = "09123456789";

    if (password.length < 8) {
      toast("⚠ رمز عبور از ۸ حرف کمتر است");
      return;
    }
    if (phoneNumber.length < 11) {
      toast("⚠ شماره موبایل از ۱۱ حرف کمتر است");
      return;
    }

    const url = isLogin ? "/login" : "/signup";

    try {
      const response = await fetch(`http://localhost:5004${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, password }),
      });

      // const data = await response.json();

      if (response.ok) {
        if (isLogin && phoneNumber === adminNum) {
          window.location.href = "/dashboard";
        } else {
          setIsLogin(true);
          window.location.href = "/not-admin";
          toast("ورود موفقیت امیز بود");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 h-screen">
      <div className="max-w-xl lg:max-w-none lg:mx-0 mx-auto col-span-12 lg:col-span-5 flex flex-col gap-y-4 justify-center items-center p-6 lg:p-0">
        <h2 className="font-bold text-gray-700 text-2xl">
          {isLogin ? "ورود" : "ثبت نام"}
        </h2>
        <form
          className="flex flex-col gap-3 w-full items-center"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full lg:w-1/2">
            <FaUserAlt className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border bg-transparent rounded-full py-3 px-10 w-full"
              placeholder="شماره همراه"
            />
          </div>
          <div className="relative w-full lg:w-1/2">
            <button
              type="button"
              onClick={togglePassword}
              className="text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              className="border bg-transparent rounded-full py-3 px-10 w-full"
              placeholder="رمز"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-500"
          >
            {isLogin
              ? "حساب کاربری ندارید؟ ثبت‌نام کنید"
              : "قبلاً ثبت‌نام کرده‌اید؟ ورود"}
          </button>
          <div className="w-full lg:w-1/2">
            <button
              type="submit"
              className="bg-primary text-white rounded-full py-3 w-full"
            >
              {isLogin ? "ورود" : "ثبت نام"}
            </button>
          </div>
        </form>
        <Toaster
          toastOptions={{
            duration: 4000,
            style: {
              backgroundColor: "#fff4de",
              color: "#fb6944",
              padding: "10px 20px",
              borderRadius: "30px",
            },
          }}
        />
      </div>
      <div className=" hidden lg:flex col-span-12 lg:col-span-7 bg-primary text-white flex-col items-center justify-center gap-y-4 p-6 lg:p-0">
        <h1 className="animate-bounce font-bold text-3xl lg:text-4xl">
          خوش آمدید
        </h1>
        <p className="text-center text-lg line-clamp-2 w-1/2">
          برای وارد شدن به صفحه داشبورد شماره 09123456789 و رمز sahar12345 را
          وارد کرده در غیر این صورت ثبت نام کنید.
        </p>
      </div>
    </div>
  );
}
