export function DailySales() {
  return (
    <section className="bg-white p-4 rounded w-[50%]  font-poppins">
      <p className="text-blue-900 text-sm ">Today's Sales</p>
      <p className="text-zinc-400 text-xs">Sales Summary</p>
      <div className="flex justify-between mt-2">
        <div className="bg-red-200 h-[1100px] w-[100px] rounded"></div>
        <div className="bg-red-200 h-[110px] w-[100px]"></div>
        <div className="bg-red-200 h-[110px] w-[100px]"></div>

        <div className="bg-red-200 h-[1100px] w-[100px]"></div>
      </div>{" "}
    </section>
  );
}
