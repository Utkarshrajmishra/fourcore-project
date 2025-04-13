import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProgressBar } from "./progressbar";

const popularProducts = [
  {
    id: "P001",
    name: "Wireless Earbuds",
    percentage: 85,
    color: "[&>*]:bg-orange-500",
    bgColor: "bg-orange-100",
    textcolor: "text-orange-500",
  },
  {
    id: "P002",
    name: "Smartwatch",
    percentage: 78,
    color: "[&>*]:bg-purple-500",
    bgColor: "bg-purple-100",
    textcolor: "text-purple-500",
  },
  {
    id: "P003",
    name: "Bluetooth Speaker",
    percentage: 65,
    color: "[&>*]:bg-emerald-500",
    bgColor: "bg-emerald-100",
    textcolor: "text-emerald-500",
  },
];

export function Prediction() {
  return (
    <div className="w-full rounded-lg bg-white border border-gray-200 p-2">
      <p className="text-sm font-medium text-blue-950">Top Product</p>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="text-xs font-normal">
              <TableHead className="text-zinc-500">#</TableHead>
              <TableHead className="text-zinc-500">Name</TableHead>
              <TableHead className="w-32 sm:w-48 md:w-64 lg:w-auto text-zinc-500">
                Popularity
              </TableHead>
              <TableHead className="text-zinc-500">Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {popularProducts.map((invoice, index) => (
              <TableRow key={invoice.id}>
                <TableCell className="text-zinc-600">{index + 1}</TableCell>
                <TableCell className="text-zinc-600">{invoice.name}</TableCell>
                <TableCell>
                  {
                    <ProgressBar
                      color={invoice.color}
                      backgroundColor={invoice.bgColor}
                      totalProgress={invoice.percentage}
                    />
                  }
                </TableCell>
                <TableCell
                  className={`text-right text-neutral-600 ${invoice.textcolor}`}
                >
                  <p
                    className={`py-1 px-2 ${invoice.bgColor} flex items-center justify-center text-xs rounded`}
                  >
                    {invoice.percentage}%
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
