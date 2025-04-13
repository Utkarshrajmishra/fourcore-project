"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from "recharts";

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

export function Satification() {
  return (
    <section className="h-fit w-[320px] rounded-xl border-1 p-2 bg-white">
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
            <Area
              dataKey="mobile"
              type="natural"
              fill="#60a5fa"
              fillOpacity={0.4}
              stroke="#60a5fa"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#60a5fa"
              fillOpacity={0.4}
              stroke="#60a5fa"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} className="mt-1" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartContainer>
    </section>
  );
}
