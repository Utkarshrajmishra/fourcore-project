"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Ticket } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Target() {
  return (
    <section className="h-fit w-[320px] p-2 rounded-lg border-1 bg-white">
      <p className="text-sm font-medium text-blue-950">Target vs Reality</p>
      <ChartContainer config={chartConfig} className="w-full h-30">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20 }}
            barGap={0}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              style={{ fontSize: 10 }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#4ab48f" radius={0} barSize={9} />
            <Bar dataKey="mobile" fill="#ffcf01" radius={0} barSize={9} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className=" h-[18px] bg-green-200 w-5 flex items-center justify-center">
            <HiOutlineShoppingBag className="size-3 text-green-800" />
          </div>
          <div className="flex gap-3">
            {" "}
            <p className="text-[0.8rem] text-blue-950 font-medium">
              Reality Sales
            </p>
            <p className="text-[0.8rem] text-green-800">8.823</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className=" h-[18px] bg-yellow-200 w-5 flex items-center justify-center">
            <Ticket className="size-3 text-yellow-800" />
          </div>
          <div className="flex gap-3">
            {" "}
            <p className="text-[0.8rem] text-blue-950 font-medium">
              Target Sales
            </p>
            <p className="text-[0.8rem] text-yellow-800">12.123</p>
          </div>
        </div>
      </div>
    </section>
  );
}
