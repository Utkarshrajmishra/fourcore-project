"use client";
import { Bar, BarChart, ResponsiveContainer} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-07-15", volume: 450, service: 300 },
  { date: "2024-07-16", volume: 380, service: 420 },
  { date: "2024-07-17", volume: 520, service: 120 },
  { date: "2024-07-18", volume: 140, service: 550 },
  { date: "2024-07-19", volume: 600, service: 350 },
  { date: "2024-07-20", volume: 480, service: 400 },

];

const chartConfig = {
  running: {
    label: "Volume",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Service",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function ServiceLevel() {
  return (
    <section className="h-fit w-[320px] border rounded-lg p-2     bg-white">
      <p className="text-sm font-medium">Total Sales</p>
      <ChartContainer config={chartConfig} className="w-full  mt-[-6px] h-32 pl-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 0 }}
            barSize={8}
          >
            <Bar
              dataKey="volume"
              stackId="a"
              fill="#00e097"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="service"
              fill="#0494ff"
              stackId="a"
              radius={[2, 2, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
              defaultIndex={0}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="flex gap-4 mt-2 justify-center">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-[#0494ff]"></div>
          <div className="text-[0.76rem]">
            <p>Volumne</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-[#00e097]"></div>
          <div className="text-[0.76rem]">
            <p>Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
