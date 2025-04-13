"use client";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", lastmonth: 186, thismonth: 80 },
  { month: "February", lastmonth: 305, thismonth: 200 },
  { month: "March", lastmonth: 237, thismonth: 120 },
  { month: "April", lastmonth: 73, thismonth: 190 },
  { month: "May", lastmonth: 209, thismonth: 130 },
  { month: "June", lastmonth: 214, thismonth: 140 },
];

const chartConfig = {
  lastmonth: {
    label: "Last Month",
    color: "hsl(var(--chart-1))",
  },
  thismonth: {
    label: "This Month",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Satification() {
  return (
    <section className="h-fit w-full rounded-xl border border-gray-200 p-2 bg-white">
      <p className="text-sm font-medium">Customer Satification</p>
      <ChartContainer config={chartConfig} className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
              top: 10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4dd5a7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.2} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="lastmonth"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="#3b82f6"
              stackId="a"
            />
            <Area
              dataKey="thismonth"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="#047857"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </section>
  );
}
