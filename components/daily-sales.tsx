import SaleCard from "./sale-card";
import { IoDocumentText, IoCart, IoPricetagSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiExport } from "react-icons/ci";

const SalesData = [
  {
    id: 1,
    bgColor: "bg-[#ffe2e6]",
    icon: <IoDocumentText className="size-4 text-white" />,
    title: "Total Sales",
    desc: "+2% from yesterday",
    amount: "$1k",
    circleColor: "bg-red-400",
  },
  {
    id: 2,
    bgColor: "bg-[#fff4de]",
    icon: <IoCart className="size-4 text-white" />,
    title: "Total Order",
    desc: "+5% from yesterday",
    amount: "300",
    circleColor: "bg-orange-400",
  },
  {
    id: 3,
    bgColor: "bg-[#dcfce7]",
    icon: <IoPricetagSharp className="size-4 text-white" />,
    title: "Product Sold",
    desc: "+5% from yesterday",
    amount: "20",
    circleColor: "bg-green-400",
  },
  {
    id: 4,
    bgColor: "bg-[#f4e8ff]",
    icon: <FaUser className="size-3 text-white" />,
    title: "New Customers",
    desc: "+2% from yesterday",
    amount: "20",
    circleColor: "bg-purple-400",
  },
];

export function DailySales() {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-xl h-fit">
      <div className="flex  justify-between sm:items-end">
        <div>
          <p className="text-sm font-medium">Today&apos;s Sale</p>{" "}
          <p className="text-xs mt-1 text-zinc-500">Sales Summary</p>
        </div>
        <button className="bg-white flex gap-2 items-center text-xs rounded py-1 px-3 text-blue-950 border border-blue-950 mt-2 sm:mt-0">
          <CiExport className="size-3" />
          Export
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {SalesData.map((item) => (
          <div key={item.id}>
            <SaleCard
              circleColor={item.circleColor}
              bgColor={item.bgColor}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              amount={item.amount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
