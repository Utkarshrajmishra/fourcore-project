import { DailySales } from "@/components/daily-sales";
import Revenue from "@/components/revenue";
import { Satification } from "@/components/satisifaction";
import { Target } from "@/components/target";
import { Visitors } from "@/components/visitor";

export default function Home() {
  return (
    <section className="w-full p-4 h-screen bg-[#f9fafc]">
      <div className="flex justify-between">
        <DailySales />
        <Visitors />
      </div>
      <div className="mt-2 flex gap-3">
        <Revenue />
        <Satification />
        <Target />
      </div>
      <div className="mt-2">
        <Visitors />
      </div>
    </section>
  );
}
