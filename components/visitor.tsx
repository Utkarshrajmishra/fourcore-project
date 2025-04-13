"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
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

const customerData = [
  {
    month: "January",
    royalCustomers: 25,
    uniqueCustomers: 10,
    newCustomers: 60,
  },
  {
    month: "February",
    royalCustomers: 40,
    uniqueCustomers: 30,
    newCustomers: 85,
  },
  {
    month: "March",
    royalCustomers: 33,
    uniqueCustomers: 20,
    newCustomers: 7,
  },
  {
    month: "April",
    royalCustomers: 15,
    uniqueCustomers: 20,
    newCustomers: 21,
  },
  { month: "May", royalCustomers: 28, uniqueCustomers: 29, newCustomers: 7 },
  { month: "June", royalCustomers: 30, uniqueCustomers: 23, newCustomers: 8 },
  { month: "July", royalCustomers: 22, uniqueCustomers: 20, newCustomers: 6 },
  {
    month: "August",
    royalCustomers: 35,
    uniqueCustomers: 30,
    newCustomers: 80,
  },
  {
    month: "September",
    royalCustomers: 38,
    uniqueCustomers: 30,
    newCustomers: 77,
  },
  {
    month: "October",
    royalCustomers: 29,
    uniqueCustomers: 20,
    newCustomers: 70,
  },
];

const chartConfig = {
  royalCustomers: {
    label: "Loyal Customers",
    color: "hsl(var(--chart-1))",
  },
  uniqueCustomers: {
    label: "Unique Customers",
    color: "hsl(var(--chart-2))",
  },
  newCustomers: {
    label: "New Customers",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function Visitors() {
  return (
    <section className="h-fit w-full border border-gray-200 rounded-xl p-4 bg-white">
      <p className="text-sm font-medium text-blue-950">Visitors Insights</p>
      <ChartContainer config={chartConfig} className="h-39 mt-4 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={customerData}
            margin={{ left: 8, right: 8, top: 0, bottom: 4 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              style={{ fontSize: 10 }}
              tickFormatter={(value) => value.slice(0, 3)}
              tick={{ fontSize: 8 }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="royalCustomers"
              type="monotone"
              stroke="#ad1bfe"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="newCustomers"
              type="monotone"
              stroke="#5ade71"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="uniqueCustomers"
              type="monotone"
              stroke="#ef4949"
              strokeWidth={2}
              dot={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </section>
  );
}
