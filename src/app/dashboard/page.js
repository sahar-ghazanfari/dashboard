import Charts from "@/components/Charts";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "داشبورد",
};

export default function dashboard() {
  return (
    <div className="grid grid-cols-5 grid-rows-10 h-screen">
      <div className="col-span-5 lg:col-span-4 self-center mx-6 lg:mx-0">
        <Header />
      </div>
      <div className="hidden lg:block lg:row-span-10 lg:col-span-1 h-full">
        <Sidebar />
      </div>
      <div className="row-span-9 col-span-5 lg:col-span-4">
        <Charts />
      </div>
    </div>
  );
}
