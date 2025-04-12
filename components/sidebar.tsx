import { AiFillPieChart } from "react-icons/ai";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuChartSpline } from "react-icons/lu";
import { FiMessageSquare } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { PiSignOutFill } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa6";

const NavLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiFillPieChart className="size-4" />,
  },
  {
    id: 2,
    title: "Leaderboard",
    icon: <LuChartNoAxesColumn className="size-4" />,
  },
  {
    id: 3,
    title: "Order",
    icon: <BsCart3 className="size-4" />,
  },
  {
    id: 4,
    title: "Products",
    icon: <HiOutlineShoppingBag className="size-4" />,
  },
  {
    id: 5,
    title: "Sales Report",
    icon: <LuChartSpline className="size-4" />,
  },
  {
    id: 6,
    title: "Messages",
    icon: <FiMessageSquare className="size-4" />,
  },
  {
    id: 7,
    title: "Settings",
    icon: <CiSettings className="size-4" />,
  },
  {
    id: 8,
    title: "Sign Out",
    icon: <PiSignOutFill className="size-4" />,
  },
];

const Sidebar = () => {
  return (
    <section className="font-poppins w-[215px] h-screen py-4 px-8">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-blue w-fit h-fit rounded">
          <FaLaptopCode className="size-4 text-white" />
        </div>
        <p className="font-[500] text-sm text-neutral-800">Dabang</p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        {NavLinks?.map((link, index) => (
          <div
            key={link.id}
            className={`text-[0.70rem] cursor-pointer tracking-tight flex items-center gap-4 pl-3 py-[7px] ${
              index === 0
                ? "text-white bg-blue rounded-lg "
                : "text-zinc-500 hover:bg-blue-200"
            }`}
          >
            {link.icon}
            <p>{link.title}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue font-poppins flex flex-col items-center justify-between  mt-6 rounded-lg py-4 w-full h-[140px]">
        <div className="p-1 bg-white text-blue w-fit h-fit rounded">
          <FaLaptopCode className="size-4 text-blue" />
        </div>
        <div className="text-center px-2">
          <p className="text-white text-[0.76rem]">Dabang Pro</p>
          <p className="text-[0.52rem] text-light text-center text-white">
            Lorem ipsum <br /> sit  sit consectetur 
          </p>
        </div>
        <button className="text-[0.70rem] mt-1 rounded py-1 ronded px-5 bg-white text-blue">
          Get Pro
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
