import StackedAreaChart from "@/components/StackedAreaChart";
import { BarChart1 } from "./BarChart";
import { SimpleLineChart } from "./SimpleLine";
import SimpleBarChart from "./SimpleBarChart";
import StackedBarChart from "./StackedBarChart";
import ContryChart from "@/components/ContryChart";
import LinearProgress from "@/components/LinearProgress";
import { FaChartBar } from "react-icons/fa";
import { LuBookText } from "react-icons/lu";
import { HiPencil } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { useLocale } from "@/context/LocaleContext";

export default function Charts({ t }) {
  const { locale } = useLocale();

  return (
    <div className="bg-[#FAFBFC] lg:h-full lg:gap-6 grid  grid-cols-1 lg:grid-cols-5 lg:grid-rows-3">
      <div className="bg-white lg:col-span-2 rounded-lg border-b-2 lg:border-none">
        <h2 className="flex justify-end text-[#05004E] font-bold m-4 lg:m-0 ">
          {t("Visitor Insights")}
        </h2>
        <SimpleLineChart />
      </div>
      <div className="bg-white lg:col-span-3 rounded-lg ">
        <div className="flex justify-between py-4">
          <button className="border border-[#C3D3E2] px-2 py-1 rounded-lg text-[#0F3659]">
            {t("export")}
          </button>
          <h2 className="flex justify-end text-[#05004E] font-bold">
            {t("Today's Sales")}
          </h2>
        </div>
        <div
          dir={locale === "fa" ? "rtl" : "ltr"}
          className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:h-3/4 mx-4 lg:mx-0"
        >
          <div className="bg-red_light chart-informations">
            <div className="p-2 bg-red text-white w-fit rounded-full ">
              <FaChartBar />
            </div>
            <span className="font-bold text-[#151D48]">$1k</span>
            <span className="text-sm">Total Sales</span>
            <span className="text-xs text-[#4079ED] font-bold">
              +8% from yesterday
            </span>
          </div>
          <div className="bg-orange_light flex-1 chart-informations">
            <div className="p-2 bg-orange text-white w-fit rounded-full">
              <LuBookText />
            </div>
            <span className="font-bold text-[#151D48]">$1k</span>
            <span className="text-sm">Total Sales</span>
            <span className="text-xs text-[#4079ED] font-bold">
              +8% from yesterday
            </span>
          </div>
          <div className="bg-green_light flex-1 chart-informations">
            <div className="p-2 bg-green text-white w-fit rounded-full">
              <HiPencil />
            </div>
            <span className="font-bold text-[#151D48]">$1k</span>
            <span className="text-sm">Total Sales</span>
            <span className="text-xs text-[#4079ED] font-bold">
              +8% from yesterday
            </span>
          </div>
          <div className="bg-purple_light flex-1 chart-informations">
            <div className="p-2 bg-purple text-white w-fit rounded-full">
              <HiUserAdd />
            </div>
            <span className="font-bold text-[#151D48]">$1k</span>
            <span className="text-sm">Total Sales</span>
            <span className="text-xs text-[#4079ED] font-bold">
              +8% from yesterday
            </span>
          </div>
        </div>
      </div>
      <div className="charts">
        <h2 className="flex justify-end text-[#05004E] font-bold m-4 lg:m-0">
          {t("Target vs Reality")}
        </h2>
        <BarChart1 />
      </div>
      <div className="charts">
        <h2 className="heading-2">{t("Customer Satisfaction")}</h2>
        <StackedAreaChart />
      </div>
      <div className="bg-white lg:col-span-3 rounded-lg border-b-2 lg:border-none">
        <h2 className="heading-2">{t("Total Revenue")}</h2>
        <SimpleBarChart />
      </div>
      <div className="charts">
        <h2 className="heading-2">{t("Volume vs Service Level")}</h2>
        <StackedBarChart />
      </div>
      <div className="charts">
        <ContryChart />
      </div>
      <div className="bg-white lg:col-span-3 rounded-lg border-b-2 lg:border-none">
        <LinearProgress t={t} />
      </div>
    </div>
  );
}
