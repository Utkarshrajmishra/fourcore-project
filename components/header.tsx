"use client";
import { Bell, Menu, Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { NavLinks } from "./sidebar";
import { FaLaptopCode } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className=" px-4 md:px-6 flex items-center justify-between h-[55px] bg-white w-full relative z-10">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center gap-2">
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <p className="text-neutral-800 font-medium">Dashboard</p>
        </div>

        <div className="block md:hidden p-2 bg-orange-50 rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>
      </div>

      <div className="hidden md:flex font-poppins items-center gap-4">
        <div className="relative text-xs overflow-hidden max-w-sm border rounded">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 h-4 w-4" />
          <Input
            placeholder="Search here..."
            className="h-8 w-full md:w-[300px] lg:w-[400px] text-xs placeholder:text-xs bg-[#f9fafc] pl-9 border-none outline-none shadow-none rounded"
          />
        </div>
        <div className="flex items-center gap-2 mx-4 whitespace-nowrap">
          <div className="bg-zinc-700 h-4 w-4 rounded-lg">
            <Image alt="Eng" src="/usa.png" width={16} height={16} />
          </div>
          <p className="text-xs text-neutral-800">Eng (US)</p>
          <FaAngleDown className="size-3 text-zinc-500" />
        </div>
        <div className="p-2 bg-orange-50 rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-700 h-9 w-9 rounded-lg">
            <Image
              alt="User"
              src="/user.jpeg"
              width={36}
              height={46}
              className="rounded-lg object-fit"
            />
          </div>
          <div>
            <div className="flex items-center gap-6">
              <p className="text-xs">Masfiq</p>
              <FaAngleDown className="size-3" />
            </div>
            <p className="text-xs text-zinc-400">Admin</p>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0  z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg overflow-auto">
            <div className="p-4 pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-[5px] bg-blue-600 w-fit h-fit rounded">
                  <FaLaptopCode className="size-4 text-white" />
                </div>
                <p className="font-medium text-sm text-neutral-800">Dabang</p>
              </div>

              <div className="relative text-xs overflow-hidden border rounded mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 h-4 w-4" />
                <Input
                  placeholder="Search here..."
                  className="h-8 w-full text-xs placeholder:text-xs bg-[#f9fafc] pl-9 border-none outline-none shadow-none rounded"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-zinc-700 h-4 w-4 rounded-lg"></div>
                  <p className="text-xs text-neutral-800">Eng (US)</p>
                  <FaAngleDown className="size-3 text-zinc-500" />
                </div>
                <div className="p-2 bg-orange-50 rounded-lg">
                  <Bell className="text-orange-400 h-[14px] w-[14px]" />
                </div>
              </div>

              <div className="flex items-center gap-2 pb-4 border-b">
                <div className="bg-zinc-700 h-9 w-9 rounded-lg"></div>
                <div>
                  <div className="flex items-center gap-6">
                    <p className="text-xs">Masfiq</p>
                    <FaAngleDown className="size-3" />
                  </div>
                  <p className="text-xs text-zinc-400">Admin</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-poppins font-medium text-neutral-800 mb-2">
                  Menu
                </p>
                <div className="flex flex-col">
                  {NavLinks?.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 p-2 rounded-lg text-sm cursor-pointer ${
                        item.id === 1
                          ? "bg-blue-600 text-white"
                          : "hover:bg-blue-50 text-zinc-600"
                      }`}
                    >
                      <span className="text-current">{item.icon}</span>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 font-poppins rounded-lg p-4 mt-6 text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-1 bg-white rounded-md">
                    <FaLaptopCode className="size-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-white text-sm font-medium mb-1">
                  Dabang Pro
                </p>
                <p className="text-white text-xs mb-3">
                  Lorem ipsum sit consectetur
                </p>
                <button className="bg-white text-blue-600 text-xs py-1 px-4 rounded-md font-medium">
                  Get Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
