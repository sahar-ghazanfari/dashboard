import StackedAreaChart from "@/components/StackedAreaChart";
import { BarChart1 } from "./BarChart";
import { SimpleLineChart } from "./SimpleLine";
import SimpleBarChart from "./SimpleBarChart";
import StackedBarChart from "./StackedBarChart";
import ContryChart from "@/components/ContryChart"
import LinearProgress from "@/components/LinearProgress"

export default function Charts() {
  return (
    <div className="bg-[#FAFBFC] lg:h-full lg:gap-6 grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-3">
      <div className="bg-white lg:col-span-2 rounded-lg">
        <h2 className="flex justify-end text-[#05004E] font-bold">
          Visitor Insights
        </h2>
        <SimpleLineChart />
      </div>
      <div className="bg-white lg:col-span-3 rounded-lg ">
        <div className="flex justify-between py-4">
          <button className="border border-[#C3D3E2] px-2 py-1 rounded-lg text-[#0F3659]">
            export
          </button>
          <h2 className="flex justify-end text-[#05004E] font-bold">
            Todays sales
          </h2>
        </div>
        <div className="flex flex-row-reverse justify-between gap-3 lg:h-3/4">
          <div className="bg-red_light flex-1 rounded-xl">1</div>
          <div className="bg-orange_light flex-1 rounded-xl">2</div>
          <div className="bg-green_light flex-1 rounded-xl">3</div>
          <div className="bg-purple_light flex-1 rounded-xl">4</div>
        </div>
      </div>
      <div className="bg-white lg:col-span-1 rounded-lg">
        <h2 className="flex justify-end text-[#05004E] font-bold">
          Target vs Reality
        </h2>
        <BarChart1 />
      </div>
      <div className="bg-white lg:col-span-1 rounded-lg">
        <h2 className="flex justify-end text-[#05004E] font-bold">
          Customer Satisfaction
        </h2>
        <StackedAreaChart />
      </div>
      <div className="bg-white lg:col-span-3 rounded-lg">
        <h2 className="flex justify-end text-[#05004E] font-bold">
          Total Revenue
        </h2>
        <SimpleBarChart />
      </div>
      <div className="bg-white lg:col-span-1 rounded-lg">
        <StackedBarChart />
      </div>
      <div className="bg-white lg:col-span-1 rounded-lg">
        <ContryChart />
      </div>
      <div className="bg-white lg:col-span-3 rounded-lg">
        <LinearProgress />
      </div>
    </div>
  );
}
