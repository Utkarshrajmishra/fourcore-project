"use server";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "./ui/input";

const Header = () => {
  return (
    <section className="font-poppins px-8 gap-4 flex items-center justify-between h-14 bg-white w-full">
      <p className="text-neutral-800 font-[550]">Dashboard</p>
      <div className="flex items-center gap-3">
        <div className="relative w-full max-w-sm border-[1px] rounded">
          <Search className="absolute left-3 top-1/2  transform -translate-y-1/2 text-blue h-4 w-4" />
          <Input
            placeholder="Search..."
            className="h-8 w-64 bg-[#f9fafc]  pl-9 border-none outline-none shadow-none rounded"
          />
        </div>
        <div className="flex items-center gap-4 whitespace-nowrap">
          <p className="text-[0.82rem] text-neutral-800">Eng (US)</p>
          <ChevronDown className="size-3 text-zinc-500" />
        </div>
        <div className="p-2 bg-orange-50 rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-700 h-9 w-9 rounded-lg"></div>
          <div>
            <div className="flex items-center gap-4">
              <p className="text-[0.82rem]">Masfiq</p>
              <ChevronDown className="size-3" />
            </div>
            <p className="text-[0.72rem] text-zinc-400">Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
