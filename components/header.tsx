"use server";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "./ui/input";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <section className="font-poppins px-6 gap-4 flex items-center justify-between h-[50px] bg-white w-full">
      <p className="text-neutral-800 font-[550]">Dashboard</p>
      <div className="flex items-center gap-4">
        <div className="relative text-[0.82rem] overflow-hidden max-w-sm border-[1px] rounded">
          <Search className="absolute left-3 top-1/2  transform -translate-y-1/2 text-blue h-4 w-4" />
          <Input
            placeholder="Search here..."
            className="h-8 w-[400px] text-[0.82rem] placeholder:text-[0.82rem] bg-[#f9fafc]  pl-9 border-none outline-none shadow-none rounded"
          />
        </div>
        <div className="flex items-center gap-2 mx-4 whitespace-nowrap">
          < div className="bg-zinc-700 h-4 w-4 rounded-lg"></div>
          <p className="text-[0.82rem] text-neutral-800">Eng (US)</p>
          <FaAngleDown className="size-3 text-zinc-500" />
        </div>
        <div className="p-2 bg-orange-50 rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-700 h-9 w-9 rounded-lg"></div>
          <div>
            <div className="flex items-center gap-6">
              <p className="text-[0.82rem]">Masfiq</p>
              <FaAngleDown className="size-3" />
            </div>
            <p className="text-[0.72rem] text-zinc-400">Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
