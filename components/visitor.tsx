"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const customerData = [
  {
    month: "January",
    royalCustomers: 25,
    uniqueCustomers: 210,
    newCustomers: 60,
  },
  {
    month: "February",
    royalCustomers: 40,
    uniqueCustomers: 350,
    newCustomers: 85,
  },
  {
    month: "March",
    royalCustomers: 33,
    uniqueCustomers: 280,
    newCustomers: 70,
  },
  {
    month: "April",
    royalCustomers: 15,
    uniqueCustomers: 220,
    newCustomers: 90,
  },
  { month: "May", royalCustomers: 28, uniqueCustomers: 260, newCustomers: 75 },
  { month: "June", royalCustomers: 30, uniqueCustomers: 275, newCustomers: 80 },
  { month: "July", royalCustomers: 22, uniqueCustomers: 230, newCustomers: 68 },
  {
    month: "August",
    royalCustomers: 35,
    uniqueCustomers: 300,
    newCustomers: 88,
  },
  {
    month: "September",
    royalCustomers: 38,
    uniqueCustomers: 310,
    newCustomers: 77,
  },
  {
    month: "October",
    royalCustomers: 29,
    uniqueCustomers: 260,
    newCustomers: 70,
  },
];

const chartConfig = {
  royalCustomers: {
    label: "royalCustomers",
    color: "hsl(var(--chart-1))",
  },
  uniqueCustomers: {
    label: "uniqueCustomers",
    color: "hsl(var(--chart-2))",
  },
  newCustomers: {
    label: "newCustomers",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Visitors() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={customerData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="#7c3aed"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="#7c3aed"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
