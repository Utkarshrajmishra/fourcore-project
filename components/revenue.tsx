"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Monday", desktop: 186, mobile: 80 },
  { month: "Tuesday", desktop: 305, mobile: 200 },
  { month: "Wednesday", desktop: 237, mobile: 120 },
  { month: "Thursday", desktop: 73, mobile: 190 },
  { month: "Friday", desktop: 209, mobile: 130 },
  { month: "Saturday", desktop: 214, mobile: 140 },
  { month: "Sunday", desktop: 214, mobile: 140 },
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

export default function Revenue() {
  return (
    <section className="h-fit w-full p-2 rounded-lg border border-gray-200 bg-white">
      <p className="text-sm font-medium text-blue-950">Total Revenue</p>
      <ChartContainer config={chartConfig} className="w-full mt-2 h-40 pl-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 10, right: 0, bottom: 0, left: -32 }}
            barGap={1}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              style={{ fontSize: 10 }}
              strokeWidth={1}
              tick={{ fontSize: 8, width: 20 }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="desktop"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: 10 }}
              strokeWidth={1}
              tick={{ fontSize: 8 }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#0094fe" radius={0} barSize={10} />
            <Bar dataKey="mobile" fill="#2be3a3" radius={0} barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </section>
  );
}
