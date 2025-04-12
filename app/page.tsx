import { DailySales } from "@/components/daily-sales";
import { Visitors } from "@/components/visitor";
import Image from "next/image";

export default function Home() {
  return (
<section className="w-full px-8 py-4 h-screen bg-[#f9fafc]">
<div className="flex">
  <DailySales/>
  <Visitors/>
</div>
</section>
  );
}
