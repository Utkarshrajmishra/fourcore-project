"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  ResponsiveContainer,
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
    label: "Royal Customers",
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
    <Card className="shadow-none w-[34%] p-2">
      <CardHeader className="pb-1">
        {" "}
        {/* Reduce bottom padding */}
        <CardTitle className="text-sm font-poppins font-medium">
          Visitors Insights
        </CardTitle>
      </CardHeader>

      <CardContent className="h-28 p-0">
        {" "}
        {/* Remove extra padding */}
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={customerData}
              margin={{ left: 8, right: 8, top: 4, bottom: 4 }} // Smaller margins
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={true}
                tickMargin={6}
                style={{ fontSize: 10 }}
                tickFormatter={(value) => value.slice(0, 3)}
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
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
