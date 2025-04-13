"use client";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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
      <p className="text-sm font-medium">Target vs Reality</p>
      <ChartContainer config={chartConfig} className="w-full h-30">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
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
            <Bar dataKey="desktop" fill="#4ab48f" radius={0} barSize={12} />
            <Bar dataKey="mobile" fill="#ffcf01" radius={0} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="flex flex-col gap-2">
        <div className="bg-yellow-400 h-6 w-6"></div>
        <div className="bg-yellow-400 h-6 w-6"></div>
      </div>
    </section>
  );
}
