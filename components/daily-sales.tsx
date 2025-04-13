import { Button } from "./ui/button";

export function DailySales() {
  return (
    <div className="w-[620px] p-4  bg-white border-1 rounded-xl h-fit">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm">pp</p>
          <p className="text-[0.72rem]">ll</p>
        </div>
          <Button>Export</Button>
      </div>
      <div className="justify-between mt-4 flex">
        <div className="h-fit p-3 rounded w-26 bg-blue-600">
          <div className="h-6 w-6 bg-green-600 rounded-full"></div>
          <p className="mt-[6px]">1k</p>
          <p className="text-[0.8rem] mt-[6px]">Total Sales</p>
          <p className="text-[0.7rem]">25% gkpp</p>
        </div>{" "}
        <div className="h-fit p-3 rounded w-26 bg-blue-600">
          <div className="h-6 w-6 bg-green-600 rounded-full"></div>
          <p className="mt-[6px]">1k</p>
          <p className="text-[0.8rem] mt-[6px]">Total Sales</p>
          <p className="text-[0.7rem]">25% gkpp</p>
        </div>{" "}
        <div className="h-fit p-3 rounded w-26 bg-blue-600">
          <div className="h-6 w-6 bg-green-600 rounded-full"></div>
          <p className="mt-[6px]">1k</p>
          <p className="text-[0.8rem] mt-[6px]">Total Sales</p>
          <p className="text-[0.7rem]">25% gkpp</p>
        </div>{" "}
        <div className="h-fit p-3 rounded w-26 bg-blue-600">
          <div className="h-6 w-6 bg-green-600 rounded-full"></div>
          <p className="mt-[6px]">1k</p>
          <p className="text-[0.8rem] mt-[6px]">Total Sales</p>
          <p className="text-[0.7rem]">25% gkpp</p>
        </div>{" "}
      </div>
    </div>
  );
}
